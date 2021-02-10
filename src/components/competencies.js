import React from "react"
import styled from "styled-components"
import { darkTheme, lightTheme } from "./themes"

const Competencies =  ({theme}) => {
  const CompetenciesWrapper = styled.div `
    background: linear-gradient(180deg, ${theme === 'light' ? lightTheme.earth : darkTheme.earth} 10%, ${lightTheme.lavaRed} 85%);
    padding-top: 1rem;
    @media only screen and (min-width: 400px) {
      background: linear-gradient(180deg, ${theme === 'light' ? lightTheme.earth : darkTheme.earth} 10%, ${lightTheme.lavaRed} 78%);
    }
    @media only screen and (min-width: 768px) {
      background: linear-gradient(180deg, ${theme === 'light' ? lightTheme.earth : darkTheme.earth} 10%, ${lightTheme.lavaRed} 70%);
    }
  `
  const ContentContainer = styled.div `
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 4rem 0 0rem 0;
  margin-top: -10px;
  margin-bottom: -2rem;
  @media only screen and (min-width: 768px) {
    padding: 2rem 0 4rem 0;
  }
`
const CompContent = styled.div `
  max-width: 1000px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;
  
  @media only screen and (min-width: 768px) {
    /* display: flex;
    justify-content: center; */
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
  li {
    /* font-size: 1rem; */
    margin: 0.5rem; 
    /* font-weight: 500; */
    color: ${darkTheme.text};
    @media only screen and (min-width: 768px) {
      margin: 0.8rem; 
    }
  }
`
  return (
    <CompetenciesWrapper>
      <ContentContainer>
        <h1 style={{color: "#FFFDFA"}}>Competencies<span style={{color: "#3BB5BF"}}>.</span></h1>
        <CompContent>
          <ul>
            <li>HTML5</li>
            <li>CSS3</li>
            <li>Sass</li>
            <li>CSS-in-JS</li>
          </ul>
          <ul>
            <li>Javascript</li>
            <li>JSX</li>
            <li>React</li>
            <li>GatsbyJS</li>
          </ul>
          <ul>
            <li>Webpack</li>
            <li>NetlifyCMS</li>
            <li>GraphQL</li>
            <li>Photoshop</li>
          </ul>
          <ul>
            <li>XD</li>
            <li>GitHub</li>
            <li>Final Cut</li>
          </ul>
            
          
        </CompContent>
      </ContentContainer>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path fill="#cf1020" fill-opacity="1" d="M0,160L62.6,128L125.2,224L187.8,128L250.4,96L313,64L375.7,0L438.3,320L500.9,224L563.5,160L626.1,0L688.7,160L751.3,160L813.9,96L876.5,96L939.1,32L1001.7,96L1064.3,192L1127,128L1189.6,288L1252.2,0L1314.8,224L1377.4,160L1440,192L1440,320L1377.4,320L1314.8,320L1252.2,320L1189.6,320L1127,320L1064.3,320L1001.7,320L939.1,320L876.5,320L813.9,320L751.3,320L688.7,320L626.1,320L563.5,320L500.9,320L438.3,320L375.7,320L313,320L250.4,320L187.8,320L125.2,320L62.6,320L0,320Z"></path>
      </svg>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
  <path fill="#E38800" fill-opacity="1" d="M0,192L62.6,160L125.2,0L187.8,256L250.4,64L313,288L375.7,160L438.3,224L500.9,288L563.5,160L626.1,224L688.7,96L751.3,0L813.9,160L876.5,128L939.1,288L1001.7,288L1064.3,32L1127,160L1189.6,32L1252.2,320L1314.8,32L1377.4,224L1440,224L1440,320L1377.4,320L1314.8,320L1252.2,320L1189.6,320L1127,320L1064.3,320L1001.7,320L939.1,320L876.5,320L813.9,320L751.3,320L688.7,320L626.1,320L563.5,320L500.9,320L438.3,320L375.7,320L313,320L250.4,320L187.8,320L125.2,320L62.6,320L0,320Z"></path>
</svg>
    </CompetenciesWrapper>
  )
}
export default Competencies