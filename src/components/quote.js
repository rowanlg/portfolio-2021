import React from "react"
import styled from "styled-components"
import { lightTheme, darkTheme } from "./themes"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../utils/font-awesome';
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";

import Boop from "./boop"

const BioPage = styled.div `
  display: flex;
  flex-direction: column;
  align-items: center;
`
const Spacer = styled.div `
  height: 30vh;
  width: 100%;
`
const ContentContainer = styled.div `
  width: 100%;
  display: flex;
  justify-content: center;
  padding-bottom: 20vw;
  margin-bottom: -20vw;
  padding-top: 2rem;
`


const Quote = ({theme}) => {

  const CodeSnippet = styled.div `
  /* background: ${theme === 'light' ? lightTheme.body : darkTheme.body}; */
  padding: 2rem;
  border-radius: 10px;
  width: 70%;
  margin: 2rem;
  /* border: 5px solid ${theme === 'light' ? lightTheme.color3 : darkTheme.color3}; */
  @media only screen and (min-width: 768px) {
    width: auto;
  }
  blockquote {
    text-align: right;
  }
`

  // Converts the theme's hex to RGBA for adding opacity to just background not text
  const hex2rgba = (hex, alpha = 1) => {
    const [r, g, b] = hex.match(/\w\w/g).map(x => parseInt(x, 16));
    return `rgba(${r},${g},${b},${alpha})`;
  };

  return (
    <BioPage>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path fill={theme === 'light' ? lightTheme.projects : darkTheme.projects} fillOpacity="0.4" d="M0,256L30,229.3C60,203,120,149,180,154.7C240,160,300,224,360,250.7C420,277,480,267,540,240C600,213,660,171,720,170.7C780,171,840,213,900,202.7C960,192,1020,128,1080,85.3C1140,43,1200,21,1260,64C1320,107,1380,213,1410,266.7L1440,320L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"></path>
      </svg>
      <ContentContainer style={theme === 'light' ? {backgroundColor: hex2rgba(lightTheme.projects, .4)} : {backgroundColor: hex2rgba(darkTheme.projects, .4)}}  >
        <CodeSnippet>
          <blockquote>“Most of the best programmers are self-taught.” <br/><span style={{fontSize: "75%"}}><strong>Jack Dorsey</strong><br/> Co-Founder of Twitter</span></blockquote>
          {/* <code>“Most of the best programmers are self-taught.” <br/>- Jack Dorsey, Co-Founder of Twitter</code> */}
          {/* <p style={{marginTop: "-1rem", fontSize: "1.4rem"}}>Scroll for projects<span style={{color: "#F4A259", fontSize: "2rem"}}>.</span></p>
          <Boop rotation={20} timing={200}>
            <FontAwesomeIcon icon={faArrowDown} style={{fontSize: "1.5rem", marginTop: "-1.2rem", marginBottom: "2rem", zIndex: "1"}} />
          </Boop> */}
        </CodeSnippet>
      </ContentContainer>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path fill={theme === 'light' ? lightTheme.projects : darkTheme.projects} fillOpacity="1" d="M0,0L30,16C60,32,120,64,180,112C240,160,300,224,360,245.3C420,267,480,245,540,224C600,203,660,181,720,144C780,107,840,53,900,42.7C960,32,1020,64,1080,96C1140,128,1200,160,1260,154.7C1320,149,1380,107,1410,85.3L1440,64L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"></path>
      </svg>
      <Spacer style={theme === 'light' ? {backgroundColor: lightTheme.projects} : {backgroundColor: darkTheme.projects}}  />
    </BioPage>
  )
}

export default Quote