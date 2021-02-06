import React from "react"
// import styled from "styled-components"
import { createGlobalStyle } from "styled-components"
import HomePage from "../components/homePage"

const GlobalStyle = createGlobalStyle `
  body {
    background-color: #0B0F1D;
    font-family: Montserrat, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    color: #FFFDFA;
  }
`

export default function Home() {
  return (
    <div className="site-wrapper">
      <GlobalStyle />
      <HomePage />
    </div>
  )
}
