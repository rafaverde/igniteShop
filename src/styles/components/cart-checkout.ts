import { styled } from "@stitches/react"

export const CartCheckoutContainer = styled("aside", {
  display: "flex",
  flexDirection: "column",

  position: "absolute",
  top: 0,
  right: 0,
  padding: "3rem",

  width: 480,
  height: "100vh",

  zIndex: 999,

  backgroundColor: "$gray800",
  boxShadow: "-4px 0px 30px 0px rgba(0, 0, 0, 0.80)",

  h3: {
    margin: "2rem 0",
  },

  transition: "all 500ms ease-out",

  variants: {
    showcart: {
      false: {
        transform: "translateX(110%)",
      },
    },
  },
})

export const CloseButton = styled("button", {
  width: "100%",
  textAlign: "right",
  background: "none",
  border: "none",
  color: "$gray100",

  position: "absolute",
  top: "1.5rem",
  right: "1.5rem",

  cursor: "pointer",
  transition: "all 200ms",

  "&:hover": {
    opacity: 0.7,
  },
})

export const ListItems = styled("div", {
  flex: 1,
  width: "100%",
  overflow: "auto",
  marginBottom: "1.25rem",

  display: "flex",
  flexDirection: "column",
  gap: "1rem",
})

export const CartSummary = styled("div", {
  width: "100%",
  margin: "2rem 0",
  display: "flex",
  flexDirection: "column",
  gap: 8,

  div: {
    "&:first-child": {
      color: "$gray300",

      span: {
        "&:nth-child(2)": {
          fontSize: "$md",
        },
      },
    },

    "&:nth-child(2)": {
      span: {
        fontSize: "$md",
        fontWeight: "bold",
      },

      strong: {
        fontSize: "$xl",
      },
    },
  },
})

export const EmptyCart = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",

  width: "100%",
  height: "100%",

  span: {
    marginTop: 20,
  },
})
