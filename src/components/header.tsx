import Link from "next/link"
import Image from "next/image"

import igniteLogo from "../assets/logo.svg"
import { HeaderContainer } from "../styles/components/header"
import { CartButton } from "./cart-button"
import { CartCheckout } from "./cart-checkout"
import { useShoppingCart } from "use-shopping-cart"

export default function Header() {
  const { handleCartClick } = useShoppingCart()

  return (
    <HeaderContainer>
      <Link href={"/"}>
        <Image src={igniteLogo} alt="" priority={true} />
      </Link>

      <CartButton variant="black" onClick={() => handleCartClick()} />

      <CartCheckout />
    </HeaderContainer>
  )
}
