import Image from "next/image"
import { GetStaticProps } from "next"

import { stripe } from "../lib/stripe"

import { HomeContainer, Product } from "../styles/pages/home"

import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"

import Stripe from "stripe"
import Head from "next/head"
import { CartButton } from "../components/cart-button"

export interface HomeProps {
  products: {
    id: string
    name: string
    imageUrl: string
    price: number
  }[]
}

export default function Home({ products }: HomeProps) {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 32,
    },
  })

  return (
    <>
      <Head>
        <title>Home | Ignite Shop</title>
      </Head>

      <HomeContainer ref={sliderRef} className="keen-slider">
        {products.map((product) => {
          return (
            <Product
              key={product.id}
              href={`/product/${product.id}`}
              className="keen-slider__slide"
              prefetch={false}
            >
              <Image
                src={product.imageUrl}
                alt=""
                priority={true}
                width={520}
                height={480}
                placeholder="blur"
                blurDataURL={product.imageUrl}
              />
              <footer>
                <div>
                  <strong>{product.name}</strong>
                  <span>
                    {new Intl.NumberFormat("pt-br", {
                      style: "currency",
                      currency: "BRL",
                    }).format(product.price)}
                  </span>
                </div>
                <div>
                  <CartButton variant="green" isCounter={false} />
                </div>
              </footer>
            </Product>
          )
        })}
      </HomeContainer>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await stripe.products.list({
    expand: ["data.default_price"],
  })

  const products = response.data.map((product) => {
    const price = product.default_price as Stripe.Price

    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      price: price.unit_amount / 100,
    }
  })

  return {
    props: {
      products,
    },
    revalidate: 60,
  }
}
