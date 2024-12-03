import { styled } from "@stitches/react"

export const CartButtonContainer = styled("button", {
  border: "none",

  width: 48,
  height: 48,

  borderRadius: 8,
  color: "$gray300",
  position: "relative",
  cursor: "pointer",
  transition: "all 200ms",

  variants: {
    color: {
      black: {
        backgroundColor: "$gray800",
        "&:hover": {
          backgroundColor: "$gray900",
          color: "$white",
        },
      },
      green: {
        backgroundColor: "$green500",
        "&:hover": {
          backgroundColor: "$green300",
          color: "$white",
        },
      },
    },

    iscounter: {
      true: {
        span: {
          position: "absolute",
          width: 24,
          height: 24,
          top: -12,
          right: -12,

          display: "flex",
          alignItems: "center",
          justifyContent: "center",

          fontSize: 14,
          fontWeight: "bold",
          letterSpacing: -0.7,

          borderRadius: 99,
          border: 1,
          borderColor: "$gray900",

          backgroundColor: "$green500",
          padding: 4,
        },
      },
      false: {
        span: {
          display: "none",
        },
      },
    },
  },
})
