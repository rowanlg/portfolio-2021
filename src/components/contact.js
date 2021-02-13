import React from "react"
import styled from "styled-components"
import { darkTheme, lightTheme } from "./themes"


const ContactWrapper = styled.div `
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: linear-gradient(180deg, ${lightTheme.lavaRed} 20%, ${props => props.theme === 'light' ? lightTheme.earth : darkTheme.earth} 75%);  
`
const Spacer = styled.div `
  height: 30vh;
  width: 100%;
`
const ContactContainer = styled.div `
  background: ${props => props.theme === 'light' ? lightTheme.body : darkTheme.body};
  padding: 4rem 2rem 0rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: rem 0rem 4rem 0rem;
  margin: 5rem 0;
  border-radius: 10px;
  width: 95%;
  box-shadow: 0px 7px 25px -10px #0B0F1D;
  @media only screen and (min-width: 400px) {
    width: 80%;
  }
  @media only screen and (min-width: 600px) {
    width: auto;
    padding: 4rem 4rem 2rem 4rem;
  }
  h1 {
    margin-bottom: 0.8rem;
  }
  h5 {
    /* margin-bottom: 0.5rem; */
    text-align: center;
    padding: 0 1rem;
    font-size: 1rem;
    @media only screen and (min-width: 768px) {
      font-size: 1.25rem;
    }
  }
`
const FormContainer = styled.form `
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr;
  gap: 30px;
  width: 100%;
  > input, textarea, button {
    border: none;
    color: ${props => props.theme === 'light' ? lightTheme.text : darkTheme.text};
    padding: 0.5rem;
    border-bottom: 2px solid ${props => props.theme === 'light' ? lightTheme.text : darkTheme.text};
    :focus {
      outline: none;
    }
    ::placeholder {
      color: ${props => props.theme === 'light' ? lightTheme.text : darkTheme.text};
    }
  }
  .name {
    background-color: ${props => props.theme === 'light' ? lightTheme.body : darkTheme.body}; 
    height: 75%;
    margin-top: 0.8rem;
  }
  .email {
    background-color: ${props => props.theme === 'light' ? lightTheme.body : darkTheme.body}; 
    height: 75%;
    margin-top: 0.8rem;
  }
  .message {
    resize: none;
    grid-row: span 2;
    background-color: ${props => props.theme === 'light' ? lightTheme.body : darkTheme.body}; 
  }
  .submit {
    background: ${props => props.theme === 'light' ? darkTheme.body : lightTheme.body};
    color: ${props => props.theme === 'light' ? darkTheme.text : lightTheme.text};
    width: 35%;
    height: 75%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    border-radius: 10px;
  }
`

const ContactSection = ({theme}) => {
 return (
    <ContactWrapper theme={theme}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path fill="#F58A07" fillOpacity="1" d="M0,192L62.6,64L125.2,192L187.8,96L250.4,0L313,256L375.7,320L438.3,128L500.9,224L563.5,160L626.1,64L688.7,288L751.3,256L813.9,96L876.5,160L939.1,192L1001.7,64L1064.3,160L1127,32L1189.6,288L1252.2,256L1314.8,256L1377.4,0L1440,96L1440,0L1377.4,0L1314.8,0L1252.2,0L1189.6,0L1127,0L1064.3,0L1001.7,0L939.1,0L876.5,0L813.9,0L751.3,0L688.7,0L626.1,0L563.5,0L500.9,0L438.3,0L375.7,0L313,0L250.4,0L187.8,0L125.2,0L62.6,0L0,0Z"></path>
      </svg>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path fill="#cf1020" fillOpacity="1" d="M0,224L62.6,96L125.2,288L187.8,64L250.4,32L313,160L375.7,320L438.3,64L500.9,288L563.5,192L626.1,256L688.7,96L751.3,288L813.9,64L876.5,128L939.1,288L1001.7,32L1064.3,64L1127,160L1189.6,288L1252.2,32L1314.8,320L1377.4,224L1440,32L1440,0L1377.4,0L1314.8,0L1252.2,0L1189.6,0L1127,0L1064.3,0L1001.7,0L939.1,0L876.5,0L813.9,0L751.3,0L688.7,0L626.1,0L563.5,0L500.9,0L438.3,0L375.7,0L313,0L250.4,0L187.8,0L125.2,0L62.6,0L0,0Z"></path>
      </svg>
      {/* <Spacer /> */}
      <ContactContainer theme={theme}>
        <h1>Contact<span style={{color: "#3BB5BF"}}>.</span></h1>
        <h5>Let's make something awesome!</h5>
        <FormContainer name="contact" method="POST" data-netlify="true" theme={theme}>
          <input type="hidden" name="form-name" value="contact"></input>
          <input className="name" type="text" name="name" placeholder="Name"></input>
          <input className="email" type="email" name="email" placeholder="Email"></input>
          <textarea className="message" name="message" placeholder="Say hello!" res="true"></textarea>
          <button className="submit" type="submit">Send</button>
        </FormContainer>
      </ContactContainer>
      {/* <Spacer /> */}
    </ContactWrapper>
  )
}

export default ContactSection