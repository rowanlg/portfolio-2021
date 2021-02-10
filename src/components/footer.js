import React from "react"
import styled from "styled-components"
import { lightTheme, darkTheme } from "../components/themes"
import Lottie from "react-lottie-player"
import astronautJson from "../lotties/astronaut.json"

const BottomFooter = styled.div `
  text-align: center;
  margin-bottom: -1rem;
`
const Spacer = styled.div `
  height: 20vh;
  width: 100%;
`
const FooterWrapper = styled.div `
  background: linear-gradient(180deg, ${props => props.theme === 'light' ? lightTheme.projects : darkTheme.projects} 0%, ${props => props.theme === 'light' ? lightTheme.body : darkTheme.body} 50%);
  min-height: 50vh;
  width: 100%;
`
const StyledLottie = styled(Lottie) `
  width: 225px;
  height: 225px;
  margin: 0 auto;
  transform: rotate(180deg);
  
  @media only screen and (min-width: 600px) {
    width: 325px;
    height: 325px;
  }
  @media only screen and (min-width: 768px) {
    width: 400px;
    height: 400px;
  }
` 

const Footer = ({theme}) => {

  return (
    <FooterWrapper theme={theme}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path fill={theme === 'light' ? lightTheme.earth : darkTheme.earth} fillOpacity="1" d="M0,160L80,149.3C160,139,320,117,480,122.7C640,128,800,160,960,170.7C1120,181,1280,171,1360,165.3L1440,160L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path>
      </svg>
      <Spacer />
      <StyledLottie
        loop
        animationData={astronautJson}
        play
        style={{gridArea: "2 / 1 / 3 / 2", zIndex: "-1", opacity: "0.8"}}
      />
      <Spacer />
      <BottomFooter>
        <p>&copy; {new Date().getFullYear()} &bull; Created by <a href="https://rowangordon.co.uk" target="_blank">Rowan Gordon</a></p>
      </BottomFooter>
    </FooterWrapper>
  )
}

export default Footer