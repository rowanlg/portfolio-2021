import React from "react"
// import styled from "styled-components"
import { createGlobalStyle } from "styled-components"
import { ThemeProvider } from "styled-components"
import { GlobalStyles } from "../components/globalStyles"
import { lightTheme, darkTheme } from "../components/themes"

import HomePage from "../components/homePage"
import Bio from "../components/bio"

// const GlobalStyle = createGlobalStyle `
//   body {
//     background-color: #0B0F1D;
//     font-family: Montserrat, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
//     color: #FFFDFA;
//   }
// `

export default function Home() {
  const [theme, setTheme] = React.useState('dark')
  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyles />
        {/* <GlobalStyle /> */}
        <HomePage themeToggler={() => theme === 'light' ? setTheme('dark') : setTheme('light')} />
        <Bio theme={theme} />
        {/* <HomePage themeToggler={() => theme === 'light' ? setTheme('dark') : setTheme('light')} /> */}
    </ThemeProvider>
  )
}
