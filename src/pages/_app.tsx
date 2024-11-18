import { AppProps } from "next/app"
import Image from "next/image"

import { globalStyles } from "../styles/global"
import { Container, Header } from "../styles/pages/app"

import igniteLogo from "../assets/logo.svg"

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <Header>
        <Image src={igniteLogo} alt="" priority={true} />
      </Header>
      <Component {...pageProps} />
    </Container>
  )
}
