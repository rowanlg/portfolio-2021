import React from "react"
import styled from "styled-components"
import { darkTheme, lightTheme } from "./themes"
import Lottie from "react-lottie-player"
import car from "../lotties/car.json"

const AboutContainer = styled.div `
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: ${props => props.theme === 'light' ? lightTheme.hills : darkTheme.hills};
  margin-top: -5px;
  z-index: 15;
  
`
const AboutContent = styled.div `
  max-width: 1000px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5rem 0 8rem 0;
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
const StyledLottie = styled(Lottie) `
  margin-bottom: -4.5vw;
  margin-top: -8vw;
`

const Road = styled.div `
  height: 1.5vw;
  width: 100%;
  background: #3C3E3E;
`
const Sand = styled.div `
  z-index: 8;
  width: 100%;
  background: ${props => props.theme === 'light' ? lightTheme.sand : darkTheme.sand};
  div {
    margin: auto;
    text-align: center;
    padding-top: 5rem;  
    max-width: 1000px;
    
  }
`
const SandMeetsSeaWrapper = styled.div `
  /* margin-top: -5rem; */
  width: 100%;
  background: ${props => props.theme === 'light' ? lightTheme.sand : darkTheme.sand};
  svg {
    margin-bottom: -1rem;
  }
` 

const AboutMeSection = ({theme}) => {

  const SandMeetsSea = ({theme}) => {
    return (
      <SandMeetsSeaWrapper theme={theme}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill={theme === 'light' ? lightTheme.waterLight : darkTheme.waterLight} fill-opacity="1" d="M0,224L60,234.7C120,245,240,267,360,256C480,245,600,203,720,192C840,181,960,203,1080,202.7C1200,203,1320,181,1380,170.7L1440,160L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
        </svg>
      </SandMeetsSeaWrapper>
    )
  }

  return (
    <AboutContainer theme={theme}>
      <AboutContent>
        <h1 style={{color: "#FFFDFA"}}>About Me<span style={{color: "#3BB5BF"}}>.</span></h1>
        <p>My professional career started in electronics, at a portable speaker company in Bristol. 
          After around 5 years there, I decided that I needed something more, and stumbled upon web development and design. 
          Instantly I was hooked. From that moment on problem solving, clean design, and writing concise, efficient code became my only direction. 
          And a few years of self-driven learning later, I’m happy to call myself a web developer!</p>
        <p>My prefered stack is the JAMStack. I love utilising the newest and most exciting technologies, and this stack is everything I was looking for. 
          I love using Javascript libraries like React, with APIs and Markdown, not only as it’s at the forefront of web development, but because it creates blazingly fast web apps and websites, that the traditional CMS model sometimes does not.</p>
      </AboutContent>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path fill={theme === 'light' ? lightTheme.smallHills : darkTheme.smallHills} fill-opacity="1" d="M0,256L30,224C60,192,120,128,180,85.3C240,43,300,21,360,48C420,75,480,149,540,181.3C600,213,660,203,720,213.3C780,224,840,256,900,240C960,224,1020,160,1080,160C1140,160,1200,224,1260,245.3C1320,267,1380,245,1410,234.7L1440,224L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"></path>
      </svg>
    <StyledLottie
        loop
        animationData={car}
        play
        style={{width: "100%"}}
      />
      <Road />
      <Sand theme={theme}>
        {/* <div>
          <h2>Things I like to do.</h2>
          <p>I can't get enough of creating, and so when I'm not coding I'm either making things with wood, writing music, or enjoying the great outdoors.</p>
        </div> */}
      </Sand>
      <SandMeetsSea theme={theme} />
      {/* <Spacer /> */}
      {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path fill="#273568" fillOpacity="1" d="M0,160L48,181.3C96,203,192,245,288,229.3C384,213,480,139,576,106.7C672,75,768,85,864,128C960,171,1056,245,1152,266.7C1248,288,1344,256,1392,240L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
      </svg> */}
      
    </AboutContainer>
  )
}

export default AboutMeSection