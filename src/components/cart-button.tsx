import { ShoppingBag } from "lucide-react"
import { CartButtonContainer } from "../styles/components/cart-button"
import { useShoppingCart } from "use-shopping-cart"

export interface CartButtonProps {
  variant: "black" | "green"
  isCounter?: boolean
  onClick?: () => void
}

export function CartButton({
  variant,
  isCounter = true,
  onClick,
}: CartButtonProps) {
  const { cartCount } = useShoppingCart()

  return (
    <CartButtonContainer
      color={variant}
      iscounter={isCounter}
      onClick={onClick}
    >
      <ShoppingBag />
      <span>{cartCount}</span>
    </CartButtonContainer>
  )
}
