import React from "react"
import styled from "styled-components"
import { darkTheme, lightTheme } from "./themes"

import AsadoBarca from "../images/asadobarca-thumbnail.jpg"

  const ProjectsContainer = styled.div `
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: ${lightTheme.lavaOrange};
    margin-top: -15px;
    padding: 10rem 0;
    h1 {
      /* margin-bottom: 5rem;
      margin-top: -5rem; */
    }
`
const ProjectsContent = styled.div `
  width: 70%;
  min-height: 40rem;
  padding: 25px;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  gap: 50px;
  border-radius: 10px;

  @media only screen and (min-width: 768px) {
    width: 70%;
    min-height: 35rem;
    
    padding: 50px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    gap: 30px;
  }

  > div {
    border-radius: 10px;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 4fr 1fr 1fr;
    background: ${lightTheme.body};
    /* box-shadow: 1px 10px 15px 0px rgba(0,0,0,0.3); */
    height: 15rem;
    h4, h6 {
        text-align: center;
        grid-row: span 1;
    }
    img {
      border-radius: 10px;
      width: 90%;
      margin: 0.8rem auto;
      grid-row: span 4;
    }
    :hover {
      box-shadow: 2px 2px 20px rgba(0, 0, 0, 0.7);
      /* transition: all 0.2s linear; */
      img {
        opacity: 0.5;
      }
    }
    @media only screen and (min-width: 768px) {
      height: auto;
    }
  }
  .project-1 {
    grid-column: span 2;
  }
  .project-2 {
    grid-column: span 2;
  }
  .project-3 {
    grid-column: span 2;
  }
  .project-4 {
    grid-column: span 2;
    @media only screen and (min-width: 768px) {
      grid-column: span 3;
    }
  }
  .project-5 {
    grid-column: span 2;
    @media only screen and (min-width: 768px) {
      grid-column: span 3;
    }
  }
`


const ProjectsSection = ({theme}) => {
  // Converts the theme's hex to RGBA for adding opacity to just background not text
  const hex2rgba = (hex, alpha = 1) => {
    const [r, g, b] = hex.match(/\w\w/g).map(x => parseInt(x, 16));
    return `rgba(${r},${g},${b},${alpha})`;
  };

const CardHoverStyle = {

}

  return (
    <ProjectsContainer>
      <h1 style={{color: "#FFFDFA"}}>Projects<span style={{color: "#3BB5BF"}}>.</span></h1>
      <ProjectsContent>
        <div className="project-1">
          <img src={AsadoBarca} />
          <h4>Asado Barcelona</h4>
          <h6>GatsbyJS, Bulma, Sass</h6>
        </div>
        <div className="project-2"></div>
        <div className="project-3"></div>
        <div className="project-4"></div>
        <div className="project-5"></div>
      </ProjectsContent>
    </ProjectsContainer>
  )
}

export default ProjectsSection