import { styled } from "@stitches/react"

export const CheckoutButtonContainer = styled("button", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: 5,

  width: "100%",
  padding: "1.25rem",

  border: "none",
  borderRadius: 8,

  backgroundColor: "$green500",
  color: "$white",

  fontSize: "$md",
  fontWeight: "bold",
  cursor: "pointer",

  transition: "all 200ms",

  "&:disable": {
    opacity: 0.5,
    cursor: "not-allowed",
  },

  "&:not(:disabled):hover": {
    backgroundColor: "$green300",
  },
})
