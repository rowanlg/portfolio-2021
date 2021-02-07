import React from "react"
import styled from "styled-components"
import { darkTheme, lightTheme } from "./themes"



const ContactSection = ({theme}) => {
 
  const ContactWrapper = styled.div `
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: linear-gradient(180deg, ${lightTheme.lavaRed} 20%, ${theme === 'light' ? lightTheme.earth : darkTheme.earth} 75%);  h1 {
    /* margin-bottom: 5rem;
    margin-top: -5rem; */
  }
`
const Spacer = styled.div `
  height: 30vh;
  width: 100%;
`
const ContactContainer = styled.div `
  background: ${theme === 'light' ? lightTheme.body : darkTheme.body};
  
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 4rem 0 6rem 0;
  margin: 5rem 0;
  width: 100%;
  @media only screen and (min-width: 768px) {
    width: auto;
    padding: 4rem 6rem 6rem 6rem;
    border-radius: 10px;
  }
  h3 {
    margin-top: -1.5rem;
    text-align: center;
  }
`
const FormContainer = styled.form `
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr;
  gap: 30px;
  
  @media only screen and (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr;
  }
  > input, textarea, button {
    /* box-shadow: 1px 2px 10px rgba(0,0,0,0.3); */
    border-radius: 5px;
    border: none;
    color: ${theme === 'light' ? lightTheme.text : darkTheme.text};
    /* background: ${theme === 'light' ? darkTheme.body : lightTheme.body}; */
    font-size: 1.2rem;
    padding: 0.5rem;
    ::placeholder {
      color: ${theme === 'light' ? lightTheme.text : darkTheme.text};
    }
  }
  .name {
    background-color: ${theme === 'light' ? lightTheme.color1 : darkTheme.color1}; 
  }
  .email {
    background-color: ${theme === 'light' ? lightTheme.color2 : darkTheme.color2}; 
  }
  .message {
    resize: none;
    grid-row: span 2;
    background-color: ${theme === 'light' ? lightTheme.color3 : darkTheme.color3}; 
    @media only screen and (min-width: 768px) {
      grid-column: span 2;
    }
  }
  .submit {
    background: ${theme === 'light' ? darkTheme.body : lightTheme.body};
    color: ${theme === 'light' ? darkTheme.text : lightTheme.text};
    width: 40%;
    cursor: pointer;
  }
`

  return (
    <ContactWrapper>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path fill="#E38800" fill-opacity="1" d="M0,192L62.6,64L125.2,192L187.8,96L250.4,0L313,256L375.7,320L438.3,128L500.9,224L563.5,160L626.1,64L688.7,288L751.3,256L813.9,96L876.5,160L939.1,192L1001.7,64L1064.3,160L1127,32L1189.6,288L1252.2,256L1314.8,256L1377.4,0L1440,96L1440,0L1377.4,0L1314.8,0L1252.2,0L1189.6,0L1127,0L1064.3,0L1001.7,0L939.1,0L876.5,0L813.9,0L751.3,0L688.7,0L626.1,0L563.5,0L500.9,0L438.3,0L375.7,0L313,0L250.4,0L187.8,0L125.2,0L62.6,0L0,0Z"></path>
      </svg>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path fill="#cf1020" fill-opacity="1" d="M0,224L62.6,96L125.2,288L187.8,64L250.4,32L313,160L375.7,320L438.3,64L500.9,288L563.5,192L626.1,256L688.7,96L751.3,288L813.9,64L876.5,128L939.1,288L1001.7,32L1064.3,64L1127,160L1189.6,288L1252.2,32L1314.8,320L1377.4,224L1440,32L1440,0L1377.4,0L1314.8,0L1252.2,0L1189.6,0L1127,0L1064.3,0L1001.7,0L939.1,0L876.5,0L813.9,0L751.3,0L688.7,0L626.1,0L563.5,0L500.9,0L438.3,0L375.7,0L313,0L250.4,0L187.8,0L125.2,0L62.6,0L0,0Z"></path>
      </svg>
      {/* <Spacer /> */}
      <ContactContainer>
        <h1>Contact<span style={{color: "#3BB5BF"}}>.</span></h1>
        <h3>Let's make something awesome!</h3>
        <FormContainer name="contact" method="POST" data-netlify="true">
          <input type="hidden" name="form-name" value="contact"></input>
          <input className="name" type="text" name="name" placeholder="Name"></input>
          <input className="email" type="email" name="email" placeholder="Email"></input>
          <textarea className="message" name="message" placeholder="Say hello!" res></textarea>
          <button className="submit" type="submit">Send</button>
        </FormContainer>
      </ContactContainer>
      {/* <Spacer /> */}
    </ContactWrapper>
  )
}

export default ContactSection