import React from "react"
import styled from "styled-components"
import Nav from "../components/navigation"
import Lottie from "react-lottie-player"
import astronautJson from "../lotties/astronaut.json"



// /* Extra small devices (phones, 600px and down) */
// @media only screen and (max-width: 600px) {...}

// /* Small devices (portrait tablets and large phones, 600px and up) */
// @media only screen and (min-width: 600px) {...}

// /* Medium devices (landscape tablets, 768px and up) */
// @media only screen and (min-width: 768px) {...}

// /* Large devices (laptops/desktops, 992px and up) */
// @media only screen and (min-width: 992px) {...}

// /* Extra large devices (large laptops and desktops, 1200px and up) */
// @media only screen and (min-width: 1200px) {...}

const HomePage = styled.div `
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(3, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  height: 100vh;
  width: 100vw;
`
const HomeText = styled.div `
  margin-top: 3rem;
  grid-area: 2 / 1 / 3 / 2;
  text-align: center;
  /* text-shadow: 2px 2px 5px rgb(0, 0, 0, 0.5); */
  -webkit-touch-callout: none; 
  -webkit-user-select: none; 
  -khtml-user-select: none; 
  -moz-user-select: none; 
  -ms-user-select: none; 
  user-select: none;
  h1 {
    font-size: 2rem;
    margin-bottom: -0.3rem;
  }
  h2 {
    font-size: 1.2rem;
  }
  @media only screen and (min-width: 600px) {
    margin-top: 4.5rem;
    h1 {
    font-size: 2.8rem;
    /* margin-bottom: -1.6rem; */
    }
    h2 {
      font-size: 1.4rem;
    }
  }
  @media only screen and (min-width: 768px) {
    margin-top: 5.5rem;
    h1 {
    font-size: 3.8rem;
    /* margin-bottom: -2.2rem; */
    }
    h2 {
      font-size: 2rem;
    }
  }
`
const StyledLottie = styled(Lottie) `
  width: 225px;
  height: 225px;
  margin: 0 auto;
  @media only screen and (min-width: 600px) {
    width: 325px;
    height: 325px;
  }
  @media only screen and (min-width: 768px) {
    width: 400px;
    height: 400px;
  }
` 

export default function Home({themeToggler}) {

  return (
    <HomePage>

      <Nav themeToggler={themeToggler} />
          
        
      <StyledLottie
        loop
        animationData={astronautJson}
        play
        style={{gridArea: "2 / 1 / 3 / 2", zIndex: "-1", opacity: "0.8"}}
      />

      <HomeText>
        <h1>Rowan Gordon<span style={{color: "#F4A259"}}>.</span></h1>
        <h2>Frontend Developer<span style={{color: "#F4E285"}}>,</span><br /> and Designer<span style={{color: "#3BB5BF"}}>.</span></h2>
      </HomeText>
    </HomePage>
  )
}

