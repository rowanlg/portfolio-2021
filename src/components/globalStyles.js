import { createGlobalStyle } from "styled-components"

export const GlobalStyles = createGlobalStyle `
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    ${'' /* font-family: Montserrat, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif; */}
    transition: all 0.5s linear;
    margin: 0;
    overflow-x: hidden;
    h1 {
      ${'' /* font-size: 2rem; */}
      @media only screen and (min-width: 768px) {
        ${'' /* font-size: 3rem; */}
      }
    }
    h3 {
      ${'' /* font-size: 1rem; */}
      @media only screen and (min-width: 768px) {
        ${'' /* font-size: 2rem; */}
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
    color: ${({ theme }) => theme.color3};
    text-decoration: none;
  }
`