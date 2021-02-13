import React from "react"
import styled from "styled-components"
import { darkTheme, lightTheme } from "./themes"

import AsadoBarca from "../images/asadobarca-thumbnail.jpg"
import AsadoBristol from "../images/asadobristol-thumbnail.jpg"
import BaldFlavours from "../images/baldflavours-thumbnail.jpg"

const ProjectsWrapper = styled.div `
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: ${lightTheme.lavaOrange};
  margin-top: -15px;
  padding: 10rem 0;
  color: ${props => props.theme === 'light' ? lightTheme.text : darkTheme.text};
`
const ProjectsContainer = styled.div `
  background: ${props => props.theme === 'light' ? lightTheme.body : darkTheme.body};
  max-width: 95%;
  margin: 2rem;
  border-radius: 10px;
  padding: 2rem;
  box-shadow: 0px 7px 25px -10px #0B0F1D;
  /* border: 10px solid #D63230; */
  img {
      border-radius: 10px;
      margin-bottom: 0;
      box-shadow: 0px 0px 25px -15px #0B0F1D;
      transition: all 0.3s linear;
      :hover {
        opacity: 0.5;
      }
  }
  h1 {
    text-align: center;
    margin-top: 1rem;
  }
`
const ProjectsContent = styled.div `
  /* border: solid; */
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;


  > div {
    background: ${props => props.theme === 'light' ? lightTheme.body : '#1E1F1F'};
    box-shadow: 0px 7px 25px -10px #0B0F1D;
    border-radius: 10px;
    padding: 0.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    max-width: 13rem;
    text-align: center;
    margin: auto;
    
    h4{
      margin-top: 0.5rem;
      margin-bottom: 0;
      font-weight: 500;
      font-size: 0.8rem;
    }
    p {
      margin-bottom: 0;
      font-size: 0.6rem;
    }
  }
`
const ProjectImage = styled.img `
  max-width: 12rem;
`


const ProjectsSection = ({theme}) => {
  // Converts the theme's hex to RGBA for adding opacity to just background not text

  const projects = [
    {
      name: "Asado Barcelona",
      image: AsadoBarca,
      stack: "GatsbyJS, Bulma, Sass"
    },
    {
      name: "Asado Bristol",
      image: AsadoBristol,
      stack: "GatsbyJS, Bulma, Sass"
    },
    {
      name: "Bald Flavours",
      image: BaldFlavours,
      stack: "GatsbyJS, Sass, NetlifyCMS, Markdown, MXD"
    },
    {
      name: "Asado Bristol",
      image: AsadoBristol,
      stack: "GatsbyJS, Bulma, Sass"
    },
  ]

  const generateProjects = projects.map(x => {
    return (
      <div key={`divKey${projects.indexOf(x)}`}>
        <ProjectImage src={projects[projects.indexOf(x)].image} />
        <h4>{projects[projects.indexOf(x)].name}</h4>
        <p>{projects[projects.indexOf(x)].stack}</p>
      </div>
    )
  })
  

  return (
    <ProjectsWrapper theme={theme}>
      <ProjectsContainer theme={theme}>
        <h1>Projects<span style={{color: "#3BB5BF"}}>.</span></h1>
        <ProjectsContent theme={theme}>
          {generateProjects}
        </ProjectsContent>
      </ProjectsContainer>
    </ProjectsWrapper>
  )
}

export default ProjectsSection