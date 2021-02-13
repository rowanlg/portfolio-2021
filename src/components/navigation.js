import React from "react"
import Boop from "./boop"
import { Link } from 'gatsby'
import styled from "styled-components"
import { animated, useSpring } from 'react-spring';
import { lightTheme, darkTheme } from "../components/themes"
import Day from "../images/day.jpg"
import Night from "../images/night.jpg"

const hex2rgba = (hex, alpha = 1) => {
  const [r, g, b] = hex.match(/\w\w/g).map(x => parseInt(x, 16));
  return `rgba(${r},${g},${b},${alpha})`;
};

const BurgerContainer = styled.div `
  grid-area: 1 / 1 / 2 / 2;
  z-index: 23;
  position: fixed;
`
const Burger = styled(animated.div) `
  width: 32px;
  margin: 2.2rem 1.8rem;
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
  z-index: 21;
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
const Bar = styled.div `
  width: 100vw;
  height: 8rem;
  transition: all 0.5s linear;
  position: fixed;
  display: flex;
  justify-content: space-between;
  background: ${props => props.dayNightToggled ? lightTheme.body : darkTheme.body};
  background: linear-gradient(180deg, ${props => props.dayNightToggled ? hex2rgba(lightTheme.body, 0.5) : hex2rgba(darkTheme.body, 0.5)} 0%, rgba(11,15,29,0) 85%);
`
const DayNightToggle = styled.div `
  width: 4rem;
  height: 2rem;
  /* position: fixed;
  right: 0;
  top: 0; */
  background-color: #000;
  border-radius: 20px;
  margin: 1.8rem;
  z-index: 20;
 
  div {
    cursor: pointer;
    width: 1.4rem;
    height: 1.4rem;
    border-radius: 20px;
    margin-top: 2px;
    margin-left: 3px; 
    background-color: #fff;
  }
`


const Nav = ({themeToggler}) => {
  const [visible, setVisible] = React.useState(true)
  const [prevScrollPos, setPrevScrollPos] = React.useState(0)
  const [dayNightToggled, setDayNightToggled] = React.useState(false)

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;

    setVisible(currentScrollPos < prevScrollPos || currentScrollPos < 100)

    setPrevScrollPos(currentScrollPos)
  }

  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);

  }, [prevScrollPos, visible, handleScroll]);

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
    background: dayNightToggled
    ? "#FFFDFA"
    : "#0B0F1D",
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
    ? `translate(39px, 0)`
    : `translate(0, 0)`,
    transition: "all 0.3s ease-in",
  }

  return (
    <>
      <BurgerContainer>
        <Bar style={visible ? {top: '0'} : {top: '-8rem'}} dayNightToggled={dayNightToggled}>
          <div>
            <Boop rotation={20} timing={200}>
              <Burger onClick={() => {
                setBurgerToggled(!burgerToggled)}} 
                style={burgerStyle}
              >
                <div style={
                  burgerToggled 
                  ? {transform: "rotate(45deg)", background: dayNightToggled ? lightTheme.text : darkTheme.text} 
                  : {background: dayNightToggled ? lightTheme.text : darkTheme.text}}
                />
                <div style={
                  burgerToggled 
                  ? {opacity: "0", background: dayNightToggled ? lightTheme.text : darkTheme.text} 
                  : {background: dayNightToggled ? lightTheme.text : darkTheme.text}}
                />
                <div style={
                  burgerToggled 
                  ? {transform: "rotate(-45deg)", background: dayNightToggled ? lightTheme.text : darkTheme.text} 
                  : {background: dayNightToggled ? lightTheme.text : darkTheme.text}}
                />
              </Burger>
            </Boop>
          </div>

          <DayNightToggle style={dayNightContainerStyle}>
            <div onClick={() => {
              setDayNightToggled(!dayNightToggled)
              themeToggler()
              }} 
              style={dayNightToggleStyle}
            />
          </DayNightToggle>



        </Bar>
      </BurgerContainer>

          

        <Navigation 
          onClick={() => {setBurgerToggled(!burgerToggled)}}
          style={navStyle}
        >
          <NavLinks>
            <Boop rotation={5} timing={200}>
              <Link 
                to="/"
                style={dayNightToggled ? {color: lightTheme.text} : {color: darkTheme.text}}
              >
                Home
              </Link>
            </Boop>
            <Boop rotation={5} timing={200}>
              <Link 
                to="/"
                style={dayNightToggled ? {color: lightTheme.text} : {color: darkTheme.text}}
              >
                Projects
              </Link>
            </Boop>
            <Boop rotation={5} timing={200}>
              <Link 
                to="/"
                style={dayNightToggled ? {color: lightTheme.text} : {color: darkTheme.text}}
              >
                About
              </Link>
            </Boop>
            <Boop rotation={5} timing={200}>
              <Link 
                to="/"
                style={dayNightToggled ? {color: lightTheme.text} : {color: darkTheme.text}}
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