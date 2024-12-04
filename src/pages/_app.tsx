import { AppProps } from "next/app"
import { CartProvider } from "use-shopping-cart"

import { globalStyles } from "../styles/global"
import { Container } from "../styles/pages/app"

import Header from "../components/header"

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <CartProvider
      cartMode="checkout-session"
      stripe={process.env.STRIPE_PUBLIC_KEY}
      currency="BRL"
      shouldPersist={true}
    >
      <Container>
        <Header />
        <Component {...pageProps} />
      </Container>
    </CartProvider>
  )
}
