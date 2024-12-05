import { DebugCart, useShoppingCart } from "use-shopping-cart"

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
  const {
    shouldDisplayCart,
    handleCartClick,
    cartCount,
    cartDetails,
    totalPrice,
  } = useShoppingCart()

  return (
    <CartCheckoutContainer showcart={shouldDisplayCart}>
      <CloseButton onClick={() => handleCartClick()}>
        <X />
      </CloseButton>

      {cartCount && cartCount > 0 ? (
        <>
          <h3>Sacola de Compras</h3>

          <ListItems>
            {Object.values(cartDetails ?? {}).map((entry) => (
              <CartItem product={entry} key={entry.id} />
            ))}
          </ListItems>

          <CartSummary>
            <div>
              <span>Quantidade</span>
              {cartCount <= 1 ? (
                <span>{cartCount} item</span>
              ) : (
                <span>{cartCount} itens</span>
              )}
            </div>

            <div>
              <span>Valor Total</span>
              <strong>
                {new Intl.NumberFormat("pt-br", {
                  style: "currency",
                  currency: "BRL",
                }).format(totalPrice)}
              </strong>
            </div>
          </CartSummary>

          <CheckoutButton />
        </>
      ) : (
        <EmptyCart>
          <Frown size="6rem" />
          <span>Seu carrinho está vazio.</span>
        </EmptyCart>
      )}
    </CartCheckoutContainer>
  )
}
