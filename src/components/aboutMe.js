import React from "react"
import styled from "styled-components"
import { darkTheme, lightTheme } from "./themes"



const AboutMeSection = ({theme}) => {
 
  const AboutContainer = styled.div `
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: ${theme === 'light' ? lightTheme.projects : darkTheme.projects};
  margin-top: -5px;
  padding: 5rem 0 0 0;
  h1 {
    /* margin-bottom: -2rem; */
    margin-top: -15rem;
  }
`
const AboutContent = styled.div `
  max-width: 1000px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2rem;
p {
  color: ${darkTheme.text};
  /* font-size: 1.2rem; */
  max-width: 80%;
  /* margin: 5rem 2.2rem 0rem 2.2rem;  */
  /* font-weight: 500; */
  @media only screen and (min-width: 600px) {
    /* font-size: 1.6rem;  */
    /* margin: 5rem 2.2rem 2.2rem 2.2rem;  */
    width: auto;
  }
  @media only screen and (min-width: 1100px) {
    /* font-size: 1.6rem;  */
    /* margin: 5rem 2.2rem 2.2rem 2.2rem;  */
  }
}
`

const Spacer = styled.div `
  height: 30vh;
  width: 100%;
`

  return (
    <AboutContainer>
      <h1 style={{color: "#FFFDFA"}}>About Me<span style={{color: "#3BB5BF"}}>.</span></h1>
      <AboutContent>
        <p>My professional career started in electronics, within a portable speaker company. After around 5 years there, I decided that I needed something more, and stumbled upon web development and design. Instantly I was hooked. From that moment on problem solving, clean design, and writing concise, efficient code became my only direction. And a few years of self-driven learning later, I’m happy to call myself a web developer! </p>
        <p>My prefered stack is the JAMStack. I love utilising the newest and most exciting technologies, and this stack is everything I was looking for. I love using Javascript libraries like React, with APIs and Markdown, not only as it’s at the forefront of web development, but because it creates blazingly fast web apps and websites, that the traditional CMS model sometimes does not.</p>
      </AboutContent>
      {/* <Spacer /> */}
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path fill={theme === 'light' ? lightTheme.earth : darkTheme.earth} fill-opacity="1" d="M0,160L48,181.3C96,203,192,245,288,229.3C384,213,480,139,576,106.7C672,75,768,85,864,128C960,171,1056,245,1152,266.7C1248,288,1344,256,1392,240L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
      </svg>
    </AboutContainer>
  )
}

export default AboutMeSection