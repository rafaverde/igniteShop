import Link from "next/link"
import { ImageContainer, SuccessContainer } from "../styles/pages/success"

export default function Success() {
  return (
    <SuccessContainer>
      <h2>Compra efetuada!</h2>
      <ImageContainer></ImageContainer>
      <p>
        Uhuul <strong>Rafael Valverde</strong>, sua{" "}
        <strong>Camiseta XXX</strong> em breve chegará na sua casa!
      </p>

      <Link href="/">Voltar ao catálogo</Link>
    </SuccessContainer>
  )
}
