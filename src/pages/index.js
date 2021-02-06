import React from "react"
// import styled from "styled-components"
import { createGlobalStyle } from "styled-components"
import HomePage from "../components/homePage"

const GlobalStyle = createGlobalStyle `
  body {
    background-color: #FFFDFA;
    font-family: Montserrat, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    color: #535353;
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
