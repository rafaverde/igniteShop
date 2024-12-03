import { styled } from "@stitches/react"

export const CartItemContainer = styled("div", {
  display: "flex",
  gap: 20,

  width: "100%",
})

export const ImageContainer = styled("div", {
  width: "100%",
  maxWidth: 102,
  height: 93,
  background: "linear-gradient(180deg, #1ea483 0%, #7465d4 100%)",
  borderRadius: 8,
  padding: "0.25rem",

  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  img: {
    objectFit: "cover",
  },
})

export const InfoContainer = styled("div", {
  flex: 1,
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-around",

  fontSize: "$md",

  button: {
    display: "flex",
    alignItems: "center",
    gap: 5,

    border: "none",
    background: "none",

    color: "$green500",
    cursor: "pointer",
    opacity: 0.8,

    fontSize: "1rem",
    transition: "all 200ms",

    "&:hover": {
      opacity: 1,
    },
  },
})
