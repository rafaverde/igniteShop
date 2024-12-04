import Image from "next/image"
import { GetStaticPaths, GetStaticProps } from "next"

import {
  ImageContainer,
  ProductContainer,
  ProductDetails,
} from "../../styles/pages/product"

import { stripe } from "../../lib/stripe"
import Stripe from "stripe"
import Head from "next/head"
import { useShoppingCart } from "use-shopping-cart"

interface ProductProps {
  product: {
    id: string
    name: string
    imageUrl: string
    price: number
    description: string
    defaultPriceId: string
  }
}

export default function Product({ product }: ProductProps) {
  const { addItem } = useShoppingCart()

  function addProductToCart(item) {
    addItem(item)
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
            priority={false}
            width={520}
            height={480}
            placeholder="blur"
            blurDataURL={product.imageUrl}
          />
        </ImageContainer>
        <ProductDetails>
          <h2>{product.name}</h2>
          <span>
            {new Intl.NumberFormat("pt-BR", {
              style: "currency",
              currency: "BRL",
            }).format(product.price)}
          </span>
          <p>{product.description}</p>
          <button onClick={() => addProductToCart(product)}>
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
        price: price.unit_amount / 100,
        description: product.description,
        defaultPriceId: price.id,
      },
    },
    revalidate: 60 * 60 * 1, //1 hour
  }
}
