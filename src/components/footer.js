import React from "react"
import styled from "styled-components"
import { lightTheme, darkTheme } from "../components/themes"
import useWindowSize from "../hooks/useWindowSize"
import Lottie from "react-lottie"
import astronaut from "../lotties/astronaut.json"

const Footer = ({theme}) => {
  const FooterWrapper = styled.div `
    background: linear-gradient(180deg, ${theme === 'light' ? lightTheme.projects : darkTheme.projects} 0%, ${theme === 'light' ? lightTheme.body : darkTheme.body} 50%);
    min-height: 50vh;
    width: 100%;
  `
 const lottieDefaultOptions = {
  loop: true,
  autoplay: true,
  animationData: astronaut,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice"
  }
}
const BottomFooter = styled.div `
  text-align: center;
`
const Spacer = styled.div `
  height: 20vh;
  width: 100%;
`

const windowSize = useWindowSize()
function setAstronautSize() {
  if (windowSize === 'sm') {
    return 225
  } else if (windowSize === 'md') {
    return 325
  } else {
    return 400
  } 
}

  return (
    <FooterWrapper>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path fill={theme === 'light' ? lightTheme.earth : darkTheme.earth} fill-opacity="1" d="M0,160L80,149.3C160,139,320,117,480,122.7C640,128,800,160,960,170.7C1120,181,1280,171,1360,165.3L1440,160L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path>
      </svg>
      <Spacer />
      <Lottie
        options={lottieDefaultOptions}
        height={setAstronautSize()}
        width={setAstronautSize()}
        style={{gridArea: "2 / 1 / 3 / 2", zIndex: "-1", opacity: "0.8", transform: "rotate(180deg)"}}
      />
      <Spacer />
      <BottomFooter>
        <p>&copy; {new Date().getFullYear()} &bull; Created by <a href="https://rowangordon.co.uk" target="_blank">Rowan Gordon</a></p>
      </BottomFooter>
    </FooterWrapper>
  )
}

export default Footer