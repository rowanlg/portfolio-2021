import React from "react"
import { Link } from 'gatsby'
import styled from "styled-components"
import { animated, useSpring } from 'react-spring';
import HomeLogoImage from "../images/triangles-gradient.png"
import Boop from "./boop"
import Lottie from "react-lottie"
import astronaut from "../lotties/astronaut.json"
import Day from "../images/day.jpg"
import Night from "../images/night.jpg"


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
`
const BurgerContainer = styled.div `
  grid-area: 1 / 1 / 2 / 2;
  z-index: 998;
  position: fixed;
`
const Burger = styled(animated.div) `
  width: 32px;
  margin: 1.5rem;
  cursor: pointer;
  div {
    height: 4px;
    background-color: #1F1F1F;
    border-radius: 5px;
    margin-top: 6px;
    transition: all 0.3s linear;
    transform-origin: 2px;
  }
`
const DayNightToggle = styled.div `
  width: 4rem;
  height: 2rem;
  position: fixed;
  right: 0;
  background-color: #000;
  border-radius: 20px;
  margin: 1.5rem;
  div {
    cursor: pointer;
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 20px;
    margin-top: 4px;
    margin-left: 5px; 
    background-color: #fff;
    /* transform: translate(33px, 0); */
  }
`

const HomeText = styled.div `
  margin-top: 2.8rem;
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
    margin-bottom: -1.2rem;
  }
  h2 {
    font-size: 1.2rem;
  }
  @media only screen and (min-width: 600px) {
    margin-top: 3.5rem;
    h1 {
    font-size: 2.8rem;
    margin-bottom: -1.6rem;
    }
    h2 {
      font-size: 1.4rem;
    }
  }
  @media only screen and (min-width: 768px) {
    margin-top: 4.8rem;
    h1 {
    font-size: 3.8rem;
    margin-bottom: -2.2rem;
    }
    h2 {
      font-size: 2rem;
    }
  }
`
const Navigation = styled(animated.div) `
  height: 100%;
  width: 100%;
  position: fixed;
  left: 0;
  top: 0;
  backdrop-filter: blur(10px);
  background-color: #f4a259;
  background-image: url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%233bb5bf' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E");
`
const NavLinks = styled.div `
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  span {
    margin: 1rem;
  }
  a {
    color: #fff;
    text-decoration: none;
    font-size: 2rem;
    font-weight: 800;
    text-shadow: 2px 2px 2px rgb(0, 0, 0, 0.2);
    
    :hover {
      color: #2D2D2A;
      text-shadow: none;
    }
  }
`

export default function Home() {
  const [burgerToggled, setBurgerToggled] = React.useState(false)
  const [dayNightToggled, setDayNightToggled] = React.useState(false)

  const burgerStyle = useSpring({
    backfaceVisibility: 'hidden',
    transform: burgerToggled 
    ?  `rotate(720deg) 
        translate(4px, 0px)`
    :  `rotate(0deg)
        translate(0px, 0px)`,
    config: {
      tension: 300,
      friction: 10,
    },
  })

  const navStyle = useSpring({
    transform: burgerToggled
    ? `translate(0, 0)`
    : `translate(0, -100%)`,
    opacity: burgerToggled 
    ? "1"
    : "0",
    config: {
      tension: 100,
      friction: 25,
    },
  })

  const dayNightContainerStyle = {
    backgroundImage: dayNightToggled
    ? `url(${Day})`
    : `url(${Night})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    border: dayNightToggled 
    ? `4px solid #0B0F1D`
    : `4px solid #FFFDFA`,
    transition: "all 0.3s ease-in",
  }

  const dayNightToggleStyle = {
    transform: dayNightToggled
    ? `translate(31px, 0)`
    : `translate(0, 0)`,
    transition: "all 0.3s ease-in",
  }

  const lottieDefaultOptions = {
    loop: true,
    autoplay: true,
    animationData: astronaut,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  }

  return (
    <HomePage>
        <BurgerContainer>
          <Boop rotation={20} timing={200}>
            <Burger onClick={() => {
              setBurgerToggled(!burgerToggled)}} 
              style={burgerStyle}
            >
              <div style={
                burgerToggled 
                ? {transform: "rotate(45deg)", backgroundColor: "#FFFDFA", transitionTimingFunction: "ease-in"} 
                : {},
                dayNightToggled
                ? {}
                : {backgroundColor: "#FFFDFA"}
                }
              />
              <div style={
                burgerToggled 
                ? {opacity: "0"} 
                : {}, 
                dayNightToggled
                ? {}
                : {backgroundColor: "#FFFDFA"}}
              />
              <div style={
                burgerToggled 
                ? {transform: "rotate(-45deg)", backgroundColor: "#FFFDFA", transitionTimingFunction: "ease-in"} 
                : {}, 
                dayNightToggled
                ? {}
                : {backgroundColor: "#FFFDFA"}}
              />
            </Burger>
          </Boop>
        </BurgerContainer>

        <DayNightToggle style={dayNightContainerStyle}>
          <div onClick={() => {
            setDayNightToggled(!dayNightToggled)}} 
            style={dayNightToggleStyle}
          />
        </DayNightToggle>

      <Navigation 
        onClick={() => {setBurgerToggled(!burgerToggled)}}
        style={navStyle}
      >
        <NavLinks>
          <Boop rotation={5} timing={200}>
            <Link to="/">Home</Link>
          </Boop>
          <Boop rotation={5} timing={200}>
            <Link to="/">Projects</Link>
          </Boop>
          <Boop rotation={5} timing={200}>
            <Link to="/">About</Link>
          </Boop>
          <Boop rotation={5} timing={200}>
            <Link to="/">Contact</Link>
          </Boop>
        </NavLinks>
      </Navigation>

      {/* <HomeLogo src={HomeLogoImage} draggable="false"/> */}
      <Lottie
        options={lottieDefaultOptions}
        height={400}
        width={400}
        style={{gridArea: "2 / 1 / 3 / 2", zIndex: "-1"}}
      />
      <HomeText>
        <h1>Rowan Gordon<span style={{color: "#F4A259"}}>.</span></h1>
        <h2>Frontend Developer<span style={{color: "#F4E285"}}>,</span><br /> and Designer<span style={{color: "#3BB5BF"}}>.</span></h2>
      </HomeText>
    </HomePage>
  )
}
