import React from "react"
import styled from "styled-components"
import { lightTheme, darkTheme } from "../components/themes"
import Lottie from "react-lottie-player"
import astronautJson from "../lotties/astronaut.json"
import AstronautUnderwater from "../../assets/AstronautUnderwater2.svg"

const FooterWrapper = styled.div `
  width: 100%;
  padding-top: 5rem;
  background: ${props => props.theme === 'light' ? lightTheme.waterDark : darkTheme.waterDark};  
`
const BottomFooter = styled.div `
  text-align: center;
  color: ${darkTheme.text};
  p {
    margin: 0;
  }
`

const Footer = ({theme}) => {

  return (
    <FooterWrapper theme={theme}>
      <BottomFooter>
        <p>&copy; {new Date().getFullYear()} &bull; Created by <a href="https://rowangordon.co.uk" target="_blank">Rowan Gordon</a></p>
      </BottomFooter>
    </FooterWrapper>
  )
}

export default Footer