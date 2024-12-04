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
        <p>{product.name}</p>
        <strong>{product.price}</strong>
        <button onClick={() => handleRemoveItem(product.id)}>
          <Trash2 size={16} />
          Remover
        </button>
      </InfoContainer>
    </CartItemContainer>
  )
}
