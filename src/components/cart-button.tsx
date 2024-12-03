import { ShoppingBag } from "lucide-react"
import { CartButtonContainer } from "../styles/components/cart-button"

export interface CartButtonProps {
  variant: "black" | "green"
  isCounter?: boolean
}

export function CartButton({ variant, isCounter = true }: CartButtonProps) {
  return (
    <CartButtonContainer color={variant} iscounter={isCounter}>
      <ShoppingBag />
      <span>10</span>
    </CartButtonContainer>
  )
}
