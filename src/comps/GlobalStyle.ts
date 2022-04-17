import { createGlobalStyle } from "styled-components";
import { colors, breakpoints } from "src/styles";

export const GlobalStyle = createGlobalStyle`
  html {
    font-size: 14px;

    @media (max-width: ${breakpoints.laptop}) {
      font-size: 12px;
    }

    @media (max-width: ${breakpoints.device}) {
      font-size: 10px;
    }
  }
  
  body {
    margin: 0;
    background: ${colors.backgroundGray};
  }
  
  h1, h2, h3, h4, h5, h6, p {
    margin: 0;
    padding: 0;
  }
  
  h1, h2, h3, h4, h5, h6 {
    font-family: Merriweather, Roboto, sans-serif;
    font-style: normal;
    font-weight: 900;
    line-height: 124%;
    color: ${colors.black};
  }
  
  h1 {
    font-size: 4.25em;
  }
  
  h2 {
    font-size: 3.5em;
  }
  
  h3 {
    font-size: 2.5em;
  }
  
  h4 {
    font-size: 2em;
  }
  
  h5 {
    font-size: 1.5em;
  }
  
  h6 {
    font-size: 1.25em;
  }
  
  @font-face {
    font-display: swap;
    font-style: normal;
    font-weight: 400;
    font-family: Merriweather, Lora, Roboto, sans-serif;
  }
`;
