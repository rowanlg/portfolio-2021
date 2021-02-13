import React from "react"
// import styled from "styled-components"
import {Helmet} from 'react-helmet'
import { createGlobalStyle } from "styled-components"
import { ThemeProvider } from "styled-components"
import { GlobalStyles } from "../components/globalStyles"
import { lightTheme, darkTheme } from "../components/themes"

import HomePage from "../components/homePage"
import Hills from "../components/hills"
import ProjectsSection from "../components/projects"
import Competencies from "../components/competencies"
import AboutMeSection from "../components/aboutMe"
import ContactSection from "../components/contact"
import Footer from "../components/footer"

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
      <Helmet>
        <title>Rowan Gordon | Portfolio</title>
        <meta name="description" content="Showcasing the work of Rowan Gordon, web developer and designer from Bristol, UK." />
        {/* <meta name="image" content={image} /> */}
      </Helmet>
      <GlobalStyles />


        <HomePage themeToggler={() => theme === 'light' ? setTheme('dark') : setTheme('light')} />
        <Hills theme={theme} />
        <AboutMeSection theme={theme} />
        <ProjectsSection theme={theme} />
        {/* <Competencies theme={theme} /> */}
        <ContactSection theme={theme} />
        <Footer theme={theme} />
        
    </ThemeProvider>
  )
}
