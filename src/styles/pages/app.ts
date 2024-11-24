import { styled } from "../index"

export const Container = styled("div", {
  display: "flex",
  flexDirection: "column",
  minHeight: "100vh",
  justifyContent: "center",
  alignItems: "flex-start",
})

export const Header = styled("header", {
  padding: "2rem 0",
  width: "100%",
  maxWidth: 1180,
  margin: "0 auto",
})
