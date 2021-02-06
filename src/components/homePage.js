import React from "react"
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
`
const Burger = styled(animated.div) `
  width: 32px;
  margin: 1rem;
  cursor: pointer;
  div {
    height: 4px;
    background-color: #535353;
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

  return (
    <HomePage>
      
        <BurgerContainer>
          <Boop rotation={20} timing={200}>
            <Burger onClick={() => {
              setBurgerToggled(!burgerToggled)}} 
              style={style}
            >
              <div style={burgerToggled ? {transform: "rotate(45deg)"} : {}}
              />
              <div style={burgerToggled ? {opacity: "0"} : {}}
              />
              <div style={burgerToggled ? {transform: "rotate(-45deg)"} : {}}
              />
            </Burger>
          </Boop>
        </BurgerContainer>
      
        

      <HomeLogo src={HomeLogoImage} />
      <HomeText>
        <h1>Rowan Gordon<span style={{color: "#F4A259"}}>.</span></h1>
        <h2>Frontend Developer<span style={{color: "#F4E285"}}>,</span><br /> and Designer<span style={{color: "#3BB5BF"}}>.</span></h2>
      </HomeText>
    </HomePage>
  )
}
