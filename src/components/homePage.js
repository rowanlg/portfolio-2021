import React from "react"
import { Link } from 'gatsby'
import styled from "styled-components"
import { animated, useSpring } from 'react-spring';
import HomeLogoImage from "../images/triangles-gradient.png"
import Boop from "./boop"

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
  margin: 1rem;
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
const HomeLogo = styled.img `
  width: 30rem;
  grid-area: 2 / 1 / 3 / 2;
  margin: 0 auto;
`
const HomeText = styled.div `
  margin-top: 4rem;
  grid-area: 2 / 1 / 3 / 2;
  text-align: center;
  h1 {
    font-size: 5rem;
    margin-bottom: -2.5rem;
  }
  h2 {
    font-size: 2.5rem;
  }
`
const color2 = '#80c9dd';
const color3 = '#d5eaf0';
const color1 = '#62bbd3';
const Navigation = styled(animated.div) `
  /* background: rgba(0,0,0,1); */
  /* background: rgba(244,162,89,0.8040201005025126);
  background: linear-gradient(180deg, rgba(59,181,191,0.8) 0%, rgba(244,162,89,0.8040201005025126) 50%, rgba(244,226,133,0.8015075376884422) 100%); */
/*   
  background-image: linear-gradient(30deg, #80c9dd 12%, transparent 12.5%, transparent 87%, #80c9dd 87.5%, #80c9dd),
linear-gradient(150deg, #80c9dd 12%, transparent 12.5%, transparent 87%, #80c9dd 87.5%, #80c9dd),
linear-gradient(30deg, #80c9dd 12%, transparent 12.5%, transparent 87%, #80c9dd 87.5%, #80c9dd),
linear-gradient(150deg, #80c9dd 12%, transparent 12.5%, transparent 87%, #80c9dd 87.5%, #80c9dd),
linear-gradient(60deg, #d5eaf0 25%, transparent 25.5%, transparent 75%, #d5eaf0 75%, #d5eaf0), 
linear-gradient(60deg, #d5eaf0 25%, transparent 25.5%, transparent 75%, #d5eaf0 75%, #d5eaf0);
background-size:40px 70px;
background-position: 0 0, 0 0, 20px 35px, 20px 35px, 0 0, 20px 35px; */

background-color: #f4a259;
background-image: url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%233bb5bf' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E");

/* background-color: #f4a259;
background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 80 40' width='80' height='40'%3E%3Cpath fill='%233bb5bf' fill-opacity='1' d='M0 40a19.96 19.96 0 0 1 5.9-14.11 20.17 20.17 0 0 1 19.44-5.2A20 20 0 0 1 20.2 40H0zM65.32.75A20.02 20.02 0 0 1 40.8 25.26 20.02 20.02 0 0 1 65.32.76zM.07 0h20.1l-.08.07A20.02 20.02 0 0 1 .75 5.25 20.08 20.08 0 0 1 .07 0zm1.94 40h2.53l4.26-4.24v-9.78A17.96 17.96 0 0 0 2 40zm5.38 0h9.8a17.98 17.98 0 0 0 6.67-16.42L7.4 40zm3.43-15.42v9.17l11.62-11.59c-3.97-.5-8.08.3-11.62 2.42zm32.86-.78A18 18 0 0 0 63.85 3.63L43.68 23.8zm7.2-19.17v9.15L62.43 2.22c-3.96-.5-8.05.3-11.57 2.4zm-3.49 2.72c-4.1 4.1-5.81 9.69-5.13 15.03l6.61-6.6V6.02c-.51.41-1 .85-1.48 1.33zM17.18 0H7.42L3.64 3.78A18 18 0 0 0 17.18 0zM2.08 0c-.01.8.04 1.58.14 2.37L4.59 0H2.07z'%3E%3C/path%3E%3C/svg%3E"); */


  height: 100vh;
  width: 100vw;
  position: fixed;
  left: 0;
  top: 0;
  backdrop-filter: blur(10px);
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
  }
`

export default function Home() {
  const [burgerToggled, setBurgerToggled] = React.useState(false)

  const style = useSpring({
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
    : `translate(0, -100vh)`,
    opacity: burgerToggled 
    ? "1"
    : "0",
    config: {
      tension: 100,
      friction: 25,
    },
  })

  return (
    <HomePage>
        <BurgerContainer>
          <Boop rotation={20} timing={200}>
            <Burger onClick={() => {
              setBurgerToggled(!burgerToggled)}} 
              style={style}
            >
              <div style={burgerToggled ? {transform: "rotate(45deg)", backgroundColor: "#FFFDFA", transitionTimingFunction: "ease-in"} : {}}
              />
              <div style={burgerToggled ? {opacity: "0"} : {}}
              />
              <div style={burgerToggled ? {transform: "rotate(-45deg)", backgroundColor: "#FFFDFA", transitionTimingFunction: "ease-in"} : {}}
              />
            </Burger>
          </Boop>
        </BurgerContainer>

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

      <HomeLogo src={HomeLogoImage} />
      <HomeText>
        <h1>Rowan Gordon<span style={{color: "#F4A259"}}>.</span></h1>
        <h2>Frontend Developer<span style={{color: "#F4E285"}}>,</span><br /> and Designer<span style={{color: "#3BB5BF"}}>.</span></h2>
      </HomeText>
    </HomePage>
  )
}
