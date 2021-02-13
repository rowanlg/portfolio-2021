import React from "react"
import styled from "styled-components"
import { lightTheme, darkTheme } from "./themes"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../utils/font-awesome';
import Lottie from "react-lottie-player"
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import birds from "../lotties/birds.json"

import Boop from "./boop"

const HillsPage = styled.div `
  display: flex;
  flex-direction: column;
  align-items: center;
`
const Quote = styled.div `
  text-align: center;
  margin-top: 5rem; 
  margin-bottom: 10rem; 
  /* border: solid; */
  height: 50vh;
  position: absolute;
  z-index: 10;
  blockquote {
    position: -webkit-sticky; /* Safari */
    position: sticky;
    top: 45vh;
  }
`
const HillsBack = styled.div `
  width: 100%;
  margin-bottom: -18rem;
  z-index: 9;
  div {
    width: 100%;
    height: 10rem;
    background: ${props => props.theme === 'light' ? lightTheme.hillsBack : darkTheme.hillsBack};
    margin-top: -1rem
  }
`
const HillsMiddle = styled.div `
  margin-bottom: -18rem;
  width: 100%;
  z-index: 10;
  div {
    width: 100%;
    height: 10rem;
    background: ${props => props.theme === 'light' ? lightTheme.hillsMiddle : darkTheme.hillsMiddle};
    margin-top: -1rem
  }
`
const HillsFront = styled.div `
  width: 100%;
  z-index: 12;
  div {
    width: 100%;
    height: 10rem;
    background: ${props => props.theme === 'light' ? lightTheme.hills : darkTheme.hills};
    margin-top: -1rem
  }
`
const StyledLottie = styled(Lottie) `
  margin-bottom: -30rem;
  z-index: 11;
`
const Hills = ({theme}) => {


  // Converts the theme's hex to RGBA for adding opacity to just background not text
  const hex2rgba = (hex, alpha = 1) => {
    const [r, g, b] = hex.match(/\w\w/g).map(x => parseInt(x, 16));
    return `rgba(${r},${g},${b},${alpha})`;
  };

  return (
    <HillsPage>

      <Quote>
        <blockquote>“Most of the best programmers are self-taught.” <br/><span style={{fontSize: "75%"}}><strong>Jack Dorsey</strong> - Co-Founder of Twitter</span></blockquote>
      </Quote>
      <StyledLottie
        loop
        animationData={birds}
        play
        style={{width: "100%"}}
      />
      <HillsBack theme={theme}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill={theme === 'light' ? lightTheme.hillsBack : darkTheme.hillsBack} fill-opacity="1" d="M0,192L17.1,165.3C34.3,139,69,85,103,74.7C137.1,64,171,96,206,96C240,96,274,64,309,64C342.9,64,377,96,411,128C445.7,160,480,192,514,218.7C548.6,245,583,267,617,256C651.4,245,686,203,720,202.7C754.3,203,789,245,823,250.7C857.1,256,891,224,926,181.3C960,139,994,85,1029,96C1062.9,107,1097,181,1131,208C1165.7,235,1200,213,1234,192C1268.6,171,1303,149,1337,154.7C1371.4,160,1406,192,1423,208L1440,224L1440,320L1422.9,320C1405.7,320,1371,320,1337,320C1302.9,320,1269,320,1234,320C1200,320,1166,320,1131,320C1097.1,320,1063,320,1029,320C994.3,320,960,320,926,320C891.4,320,857,320,823,320C788.6,320,754,320,720,320C685.7,320,651,320,617,320C582.9,320,549,320,514,320C480,320,446,320,411,320C377.1,320,343,320,309,320C274.3,320,240,320,206,320C171.4,320,137,320,103,320C68.6,320,34,320,17,320L0,320Z"></path>
        </svg>
        <div />
      </HillsBack>
      <HillsMiddle theme={theme}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill={theme === 'light' ? lightTheme.hillsMiddle : darkTheme.hillsMiddle} fillOpacity="1" d="M0,256L30,229.3C60,203,120,149,180,154.7C240,160,300,224,360,250.7C420,277,480,267,540,240C600,213,660,171,720,170.7C780,171,840,213,900,202.7C960,192,1020,128,1080,85.3C1140,43,1200,21,1260,64C1320,107,1380,213,1410,266.7L1440,320L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"></path>
        </svg>
        <div />
      </HillsMiddle>
      <HillsFront theme={theme}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill={theme === 'light' ? lightTheme.hills : darkTheme.hills} fill-opacity="1" d="M0,224L26.7,224C53.3,224,107,224,160,202.7C213.3,181,267,139,320,138.7C373.3,139,427,181,480,197.3C533.3,213,587,203,640,192C693.3,181,747,171,800,181.3C853.3,192,907,224,960,234.7C1013.3,245,1067,235,1120,208C1173.3,181,1227,139,1280,133.3C1333.3,128,1387,160,1413,176L1440,192L1440,320L1413.3,320C1386.7,320,1333,320,1280,320C1226.7,320,1173,320,1120,320C1066.7,320,1013,320,960,320C906.7,320,853,320,800,320C746.7,320,693,320,640,320C586.7,320,533,320,480,320C426.7,320,373,320,320,320C266.7,320,213,320,160,320C106.7,320,53,320,27,320L0,320Z"></path>
        </svg>
        <div />
      </HillsFront>
    </HillsPage>
  )
}

export default Hills