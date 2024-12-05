import { useShoppingCart } from "use-shopping-cart"
import axios from "axios"
import { useState } from "react"

import { Check } from "lucide-react"
import { CheckoutButtonContainer } from "../styles/components/checkout-button"

export function CheckoutButton() {
  const { redirectToCheckout, cartDetails } = useShoppingCart()
  const [isLoading, setIsLoading] = useState(false)

  async function handleCheckout() {
    setIsLoading(true)
    const checkoutItems = Object.values(cartDetails).map((item) => ({
      priceId: item.defaultPriceId,
      quantity: item.quantity,
    }))

    try {
      const response = await axios.post("/api/checkout", { checkoutItems })

      const { checkoutUrl } = response.data

      window.location.href = checkoutUrl
    } catch (error) {
      alert("Erro ao redirecionar para o checkout.")
      console.error(error)
      setIsLoading(false)
    }
  }

  return (
    <CheckoutButtonContainer onClick={handleCheckout} disabled={isLoading}>
      <Check />
      {isLoading ? "Carregando" : "Finalizar Compra"}
    </CheckoutButtonContainer>
  )
}
