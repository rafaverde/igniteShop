import { styled } from ".."

export const HomeContainer = styled("main", {
  display: "flex",
  width: "100%",
  marginLeft: "auto",
  maxWidth: "calc(100vw - ((100vw - 1180px)/2))",
  // minHeight: 656,
})

export const Product = styled("a", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  background: "linear-gradient(180deg, #1ea483 0%, #7465d4 100%)",
  borderRadius: 8,

  cursor: "pointer",
  position: "relative",
  overflow: "hidden",

  img: {
    objectFit: "cover",
  },

  footer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "1rem",

    position: "absolute",
    bottom: "0.25rem",
    left: "0.25rem",
    right: "0.25rem",
    padding: "2rem",

    borderRadius: 6,

    background: "rgba(0,0,0,0.6)",
    transform: "translateY(110%)",
    opacity: 0,
    transition: "all 200ms ease-in-out",

    strong: {
      fontSize: "$lg",
    },

    span: {
      fontSize: "$xl",
      fontWeight: "bold",
      color: "$green300",
    },
  },

  "&:hover": {
    footer: {
      transform: "translateY(0%)",
      opacity: 1,
    },
  },
})
