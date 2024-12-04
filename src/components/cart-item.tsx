import { Trash2 } from "lucide-react"
import {
  CartItemContainer,
  ImageContainer,
  InfoContainer,
} from "../styles/components/cart-item"
import Image from "next/image"
import { useShoppingCart } from "use-shopping-cart"

interface CartItemProps {
  product: {
    id: string
    name: string
    price: number
    imageUrl?: string
    quantity: number
  }
}

export function CartItem({ product }: CartItemProps) {
  const { removeItem } = useShoppingCart()

  function handleRemoveItem(item) {
    removeItem(item)
  }

  return (
    <CartItemContainer>
      <ImageContainer>
        <Image
          src={product.imageUrl}
          alt={product.name}
          width={90}
          height={90}
        />
      </ImageContainer>

      <InfoContainer>
        <p>
          {product.quantity}x {product.name}
        </p>
        <strong>
          {new Intl.NumberFormat("pt-br", {
            style: "currency",
            currency: "BRL",
          }).format(product.price * product.quantity)}
        </strong>
        <button onClick={() => handleRemoveItem(product.id)}>
          <Trash2 size={16} />
          Remover
        </button>
      </InfoContainer>
    </CartItemContainer>
  )
}
