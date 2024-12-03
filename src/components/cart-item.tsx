import { Trash2 } from "lucide-react"
import {
  CartItemContainer,
  ImageContainer,
  InfoContainer,
} from "../styles/components/cart-item"

export function CartItem() {
  return (
    <CartItemContainer>
      <ImageContainer></ImageContainer>

      <InfoContainer>
        <p>Camiseta XXX</p>
        <strong>R$ 79,90</strong>
        <button>
          <Trash2 size={16} />
          Remover
        </button>
      </InfoContainer>
    </CartItemContainer>
  )
}
