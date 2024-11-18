import Image from "next/image"
import { HomeContainer, Product } from "../styles/pages/home"

import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"

import product1 from "../assets/products/1.png"
import product2 from "../assets/products/2.png"
import product3 from "../assets/products/3.png"

export default function Home() {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 32,
    },
  })

  return (
    <HomeContainer ref={sliderRef} className="keen-slider">
      <Product className="keen-slider__slide">
        <Image src={product1} alt="" priority={true} width={520} height={480} />
        <footer>
          <strong>Camiseta X</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>
      <Product className="keen-slider__slide">
        <Image src={product2} alt="" priority={true} width={520} height={480} />
        <footer>
          <strong>Camiseta XX</strong>
          <span>R$ 89,90</span>
        </footer>
      </Product>
      <Product className="keen-slider__slide">
        <Image src={product3} alt="" priority={true} width={520} height={480} />
        <footer>
          <strong>Camiseta XX</strong>
          <span>R$ 89,90</span>
        </footer>
      </Product>
      <Product className="keen-slider__slide">
        <Image src={product3} alt="" priority={true} width={520} height={480} />
        <footer>
          <strong>Camiseta XX</strong>
          <span>R$ 89,90</span>
        </footer>
      </Product>
    </HomeContainer>
  )
}
