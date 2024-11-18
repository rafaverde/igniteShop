import { styled } from "../styles"

const Button = styled("button", {
  padding: "10px 20px",
  backgroundColor: "$green300",
  color: "White",
  border: "none",
  borderRadius: 6,
  fontSize: "1.2rem",
  cursor: "pointer",

  span: {
    fontWeight: "bold",
  },

  "&:hover": {
    filter: "brightness(0.9)",
  },
})

export default function Home() {
  return (
    <Button>
      Clique para <span>Enviar</span>
    </Button>
  )
}
