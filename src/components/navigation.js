import React from "react"
import Boop from "./boop"
import { Link } from 'gatsby'
import styled from "styled-components"
import { animated, useSpring } from 'react-spring';
import { lightTheme, darkTheme } from "../components/themes"

const BurgerContainer = styled.div `
  grid-area: 1 / 1 / 2 / 2;
  z-index: 6;
  position: fixed;
`
const Burger = styled(animated.div) `
  width: 32px;
  margin: 1.8rem;
  cursor: pointer;
  div {
    height: 4px;
    border-radius: 5px;
    margin-top: 6px;
    transition: all 0.3s linear;
    transform-origin: 2px;
  }
`
const Navigation = styled(animated.div) `
  height: 100%;
  width: 100%;
  position: fixed;
  left: 0;
  top: 0;
  backdrop-filter: blur(10px);
  z-index: 5;
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
    /* color: #fff; */
    text-decoration: none;
    font-size: 1.4rem;
    font-weight: 500;
    /* text-shadow: 2px 2px 2px rgb(0, 0, 0, 0.2); */
    
    :hover {
      /* color: #2D2D2A;
      text-shadow: none; */
    }
  }
`


const Nav = ({darkModeToggle}) => {

  const [burgerToggled, setBurgerToggled] = React.useState(false)

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
    background: darkModeToggle
    ? "#FFFDFA"
    : "#0B0F1D",
    config: {
      tension: 100,
      friction: 25,
    },
  })

  return (
    <>
      <BurgerContainer>
            <Boop rotation={20} timing={200}>
              <Burger onClick={() => {
                setBurgerToggled(!burgerToggled)}} 
                style={burgerStyle}
              >
                <div style={
                  burgerToggled 
                  ? {transform: "rotate(45deg)", background: darkModeToggle ? lightTheme.text : darkTheme.text} 
                  : {background: darkModeToggle ? lightTheme.text : darkTheme.text}}
                />
                <div style={
                  burgerToggled 
                  ? {opacity: "0", background: darkModeToggle ? lightTheme.text : darkTheme.text} 
                  : {background: darkModeToggle ? lightTheme.text : darkTheme.text}}
                />
                <div style={
                  burgerToggled 
                  ? {transform: "rotate(-45deg)", background: darkModeToggle ? lightTheme.text : darkTheme.text} 
                  : {background: darkModeToggle ? lightTheme.text : darkTheme.text}}
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
              <Link 
                to="/"
                style={darkModeToggle ? {color: lightTheme.text} : {color: darkTheme.text}}
              >
                Home
              </Link>
            </Boop>
            <Boop rotation={5} timing={200}>
              <Link 
                to="/"
                style={darkModeToggle ? {color: lightTheme.text} : {color: darkTheme.text}}
              >
                Projects
              </Link>
            </Boop>
            <Boop rotation={5} timing={200}>
              <Link 
                to="/"
                style={darkModeToggle ? {color: lightTheme.text} : {color: darkTheme.text}}
              >
                About
              </Link>
            </Boop>
            <Boop rotation={5} timing={200}>
              <Link 
                to="/"
                style={darkModeToggle ? {color: lightTheme.text} : {color: darkTheme.text}}
              >
                Contact
              </Link>
            </Boop>
          </NavLinks>
        </Navigation>
    </>
  )
}

export default Nav