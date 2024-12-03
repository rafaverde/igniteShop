import { Frown, X } from "lucide-react"
import {
  CartCheckoutContainer,
  CartSummary,
  CloseButton,
  EmptyCart,
  ListItems,
} from "../styles/components/cart-checkout"
import { CartItem } from "./cart-item"
import { CheckoutButton } from "./checkout-button"

export function CartCheckout() {
  return (
    <CartCheckoutContainer showcart={false}>
      <CloseButton>
        <X />
      </CloseButton>

      <h3>Sacola de Compras</h3>

      <ListItems>
        <CartItem />
        <CartItem />
        <CartItem />
      </ListItems>

      <CartSummary>
        <div>
          <span>Quantidade</span>
          <span>3 itens</span>
        </div>

        <div>
          <span>Valor Total</span>
          <strong>R$ 270,00</strong>
        </div>
      </CartSummary>

      <CheckoutButton />

      <EmptyCart isempty>
        <Frown size="6rem" />
        <span>Seu carrinho está vazio.</span>
      </EmptyCart>
    </CartCheckoutContainer>
  )
}
