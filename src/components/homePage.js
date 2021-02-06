import React from "react"
import styled from "styled-components"
import Nav from "../components/navigation"
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


export default function Home({themeToggler}) {
  const [dayNightToggled, setDayNightToggled] = React.useState(false)

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

      <Nav darkModeToggle={dayNightToggled} />

      <DayNightToggle style={dayNightContainerStyle}>
        <div onClick={() => {
          setDayNightToggled(!dayNightToggled)
          themeToggler()
          }} 
          style={dayNightToggleStyle}
        />
      </DayNightToggle>

        
      <Lottie
        options={lottieDefaultOptions}
        height={400}
        width={400}
        style={{gridArea: "2 / 1 / 3 / 2", zIndex: "-1", opacity: "0.8"}}
      />
      <HomeText>
        <h1>Rowan Gordon<span style={{color: "#F4A259"}}>.</span></h1>
        <h2>Frontend Developer<span style={{color: "#F4E285"}}>,</span><br /> and Designer<span style={{color: "#3BB5BF"}}>.</span></h2>
      </HomeText>
    </HomePage>
  )
}
