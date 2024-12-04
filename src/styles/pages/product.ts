import { styled } from "@stitches/react"

export const ProductContainer = styled("main", {
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  alignItems: "stretch",
  gap: "4rem",

  maxWidth: 1180,
  margin: "0 auto",
})

export const ImageContainer = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "0.25rem",

  maxWidth: 576,
  width: "100%",
  height: 600,

  background: "linear-gradient(180deg, #1ea483 0%, #7465d4 100%)",
  borderRadius: 8,

  img: {
    objectFit: "cover",
  },
})

export const ProductDetails = styled("div", {
  display: "flex",
  flexDirection: "column",

  h2: {
    fontSize: "$xxl",
    color: "$gray300",
  },

  span: {
    fontSize: "$xxl",
    color: "$green300",
    marginTop: "1rem",
    display: "block",
  },

  p: {
    marginTop: "2.5rem",
    fontSize: "$md",
    lineHeight: 1.6,
    color: "$gray300",
  },

  button: {
    marginTop: "auto",
    backgroundColor: "$green300",
    color: "$white",

    padding: "1.25rem",
    fontSize: "$lg",
    fontWeight: "bold",

    border: 0,
    borderRadius: 8,
    cursor: "pointer",

    transition: "all 300ms",

    "&:disable": {
      opacity: 0.6,
      cursor: "not-allowed",
    },

    "&:not(:disabled):hover": {
      backgroundColor: "$green500",
    },
  },
})
