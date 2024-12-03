import Image from "next/image"
import { GetStaticPaths, GetStaticProps } from "next"

import {
  ImageContainer,
  ProductContainer,
  ProductDetails,
} from "../../styles/pages/product"

import { stripe } from "../../lib/stripe"
import Stripe from "stripe"
import axios from "axios"
import { useState } from "react"
import Head from "next/head"

interface ProductProps {
  product: {
    id: string
    name: string
    imageUrl: string
    price: string
    description: string
    defaultPriceId: string
  }
}

export default function Product({ product }: ProductProps) {
  const [isCreatingCheckoutSession, setIsCreatingCheckoutSession] =
    useState(false)

  async function handleBuyProduct() {
    try {
      setIsCreatingCheckoutSession(true)

      const response = await axios.post("/api/checkout", {
        priceId: product.defaultPriceId,
      })

      const { checkoutUrl } = response.data

      window.location.href = checkoutUrl
    } catch (error) {
      setIsCreatingCheckoutSession(false)

      alert("Falha no redirecionamento do checkout.")
    }
  }

  return (
    <>
      <Head>
        <title>{product.name} | Ignite Shop </title>
      </Head>

      <ProductContainer>
        <ImageContainer>
          <Image
            src={product.imageUrl}
            alt=""
            priority={true}
            width={520}
            height={480}
            placeholder="blur"
            blurDataURL={product.imageUrl}
          />
        </ImageContainer>
        <ProductDetails>
          <h2>{product.name}</h2>
          <span>{product.price}</span>
          <p>{product.description}</p>
          <button
            disabled={isCreatingCheckoutSession}
            onClick={handleBuyProduct}
          >
            Adicionar a sacola
          </button>
        </ProductDetails>
      </ProductContainer>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [{ params: { id: "prod_RFK6GXPRO7V3Ai" } }],
    fallback: true,
  }
}

export const getStaticProps: GetStaticProps<any, { id: string }> = async ({
  params,
}) => {
  const productId = params.id

  const product = await stripe.products.retrieve(productId, {
    expand: ["default_price"],
  })

  const price = product.default_price as Stripe.Price

  return {
    props: {
      product: {
        id: product.id,
        name: product.name,
        imageUrl: product.images[0],
        price: new Intl.NumberFormat("pt-BR", {
          style: "currency",
          currency: "BRL",
        }).format(price.unit_amount / 100),
        description: product.description,
        defaultPriceId: price.id,
      },
    },
    revalidate: 60 * 60 * 1, //1 hour
  }
}
