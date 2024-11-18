import Image from "next/image"
import { HomeContainer, Product } from "../styles/pages/home"

import product1 from "../assets/products/1.png"
import product2 from "../assets/products/2.png"
import product3 from "../assets/products/3.png"

export default function Home() {
  return (
    <HomeContainer>
      <Product>
        <Image src={product1} alt="" priority={true} width={520} height={480} />
        <footer>
          <strong>Camiseta X</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>
      <Product>
        <Image src={product2} alt="" priority={true} width={520} height={480} />
        <footer>
          <strong>Camiseta XX</strong>
          <span>R$ 89,90</span>
        </footer>
      </Product>
    </HomeContainer>
  )
}
