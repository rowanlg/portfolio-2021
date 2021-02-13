import React from "react"
import styled from "styled-components"
import { darkTheme, lightTheme } from "./themes"
import AstronautUnderwater from "../../assets/AstronautUnderwater2.svg"

const ContactWrapper = styled.div `
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: ${props => props.theme === 'light' ? lightTheme.waterDark : darkTheme.waterDark};  
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
const StyledAstronautUnderwater = styled(AstronautUnderwater) `
  width: 225px;
  height: 225px;
  /* transform: rotate(180deg); */

  @media only screen and (min-width: 600px) {
    width: 325px;
    height: 325px;
  }
  @media only screen and (min-width: 768px) {
    width: 400px;
    height: 400px;
  }
` 
const AstronautContainer = styled.div `
  display: flex;
  justify-content: center;
  align-items: center;
`
const Grid = styled.div ` 
  display: grid;
  grid-template-columns: 1fr 1fr;
`

const ContactSection = ({theme}) => {
 return (
    <ContactWrapper theme={theme}>
      <Grid>
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
        <AstronautContainer>
          <StyledAstronautUnderwater />
        </AstronautContainer>
      </Grid>
    </ContactWrapper>
  )
}

export default ContactSection