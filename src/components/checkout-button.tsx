import { Check } from "lucide-react"
import { CheckoutButtonContainer } from "../styles/components/checkout-button"
import { useShoppingCart } from "use-shopping-cart"
import { useState } from "react"

export function CheckoutButton() {
  const { redirectToCheckout } = useShoppingCart()
  const [isLoading, setIsLoading] = useState(false)

  async function handleCheckout(event) {
    event.preventDefault()
    setIsLoading(true)

    try {
      const result = await redirectToCheckout()

      if (result?.error) {
        alert("Algo deu errado. Por favor tente mais tarde.")
        console.error(result)
        setIsLoading(false)
      }
    } catch (error) {
      alert("Algo deu errado. Por favor tente mais tarde.")
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
