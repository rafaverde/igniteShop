import { Check } from "lucide-react"
import { CheckoutButtonContainer } from "../styles/components/checkout-button"

export function CheckoutButton() {
  return (
    <CheckoutButtonContainer>
      <Check />
      Finalizar compra
    </CheckoutButtonContainer>
  )
}
