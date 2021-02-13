import { createGlobalStyle } from "styled-components"

export const GlobalStyles = createGlobalStyle `
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    ${'' /* font-family: Montserrat, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif; */}
    transition: all 0.5s linear;
    margin: 0;
    ${'' /* overflow-x: hidden; */}
    p, li, textarea, input, button {
      font-size: 0.8rem;
      @media only screen and (min-width: 768px) {
        font-size: 1rem;
      }
    }
    h1 {
      font-size: 1.6rem;
      @media only screen and (min-width: 768px) {
        font-size: 2rem;
      }
    }
  }
  textarea {
    ${'' /* font-family: Montserrat, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif; */}
  }
  input {
    ${'' /* font-family: Montserrat, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif; */}
    @media only screen and (max-width: 458px) {
      font-size: 0.8rem;
    }
  }
  a {
    color: ${({ theme }) => theme.color1};
    text-decoration: none;
  }
`