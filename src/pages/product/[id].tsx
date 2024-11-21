import { useRouter } from "next/router"
import {
  ImageContainer,
  ProductContainer,
  ProductDetails,
} from "../../styles/pages/product"

export default function Product() {
  const { query } = useRouter()

  return (
    <ProductContainer>
      <ImageContainer></ImageContainer>
      <ProductDetails>
        <h2>Camiseta X</h2>
        <span>R$ 79,90</span>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet in,
          laudantium fugiat doloremque quisquam exercitationem veritatis sequi
          quasi repudiandae id? Ad sequi, amet itaque voluptatum quae labore
          voluptatem quidem voluptas.
        </p>
        <button>Comprar agora</button>
      </ProductDetails>
    </ProductContainer>
  )
}
