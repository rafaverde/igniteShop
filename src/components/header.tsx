import Link from "next/link"
import Image from "next/image"

import igniteLogo from "../assets/logo.svg"
import { HeaderContainer } from "../styles/components/header"
import { CartButton } from "./cart-button"

export default function Header() {
  return (
    <HeaderContainer>
      <Link href={"/"}>
        <Image src={igniteLogo} alt="" priority={true} />
      </Link>

      <CartButton variant="black" />
    </HeaderContainer>
  )
}
