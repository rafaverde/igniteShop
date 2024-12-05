import Link from "next/link"
import { ImageContainer, SuccessContainer } from "../styles/pages/success"
import { GetServerSideProps } from "next"
import { stripe } from "../lib/stripe"
import Stripe from "stripe"
import Image from "next/image"
import Head from "next/head"
import { useEffect } from "react"
import { useShoppingCart } from "use-shopping-cart"

interface SuccessProps {
  customerName: string
  product: {
    id: string
    quantity: number
    image: string
  }
  productsImages: {
    imageUrl: string
  }[]
}

export default function Success({
  customerName,
  product,
  productsImages,
}: SuccessProps) {
  const { clearCart } = useShoppingCart()
  useEffect(() => {
    clearCart()
  }, [])

  return (
    <>
      <Head>
        <title>Compra efetuada com sucesso | Ignite Shop</title>

        <meta name="robots" content="noindex" />
      </Head>

      <SuccessContainer>
        <h2>Compra efetuada!</h2>
        <div>
          {productsImages.map((item, index) => (
            <ImageContainer key={product.id + index}>
              <Image src={item.imageUrl} alt="" width={120} height={110} />
            </ImageContainer>
          ))}
        </div>
        <p>
          Uhuul <strong>{customerName}</strong>, sua compra de{" "}
          <strong>{product.quantity}</strong> camisetas em breve chegará na sua
          casa!
        </p>

        <Link href="/">Voltar ao catálogo</Link>
      </SuccessContainer>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  if (!query.session_id) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    }
  }

  const sessionId = String(query.session_id)

  const session = await stripe.checkout.sessions.retrieve(sessionId, {
    expand: ["line_items", "line_items.data.price.product"],
  })

  const customerName = session.customer_details.name

  const products = session.line_items.data.map((item) => ({
    product: item.price.product as Stripe.Product,
  }))

  const productsImages = products.map((item) => ({
    imageUrl: item.product.images[0],
  }))

  const quantityTotal = session.line_items.data.reduce((acc, item) => {
    return acc + item.quantity
  }, 0)

  console.log(productsImages[0])
  return {
    props: {
      customerName,
      product: {
        id: products.map((item) => item.product.id),
        quantity: quantityTotal,
      },
      productsImages,
    },
  }
}
