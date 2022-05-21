import { createGlobalStyle } from "styled-components";
import { colors, breakpoints } from "src/styles";

export const GlobalStyle = createGlobalStyle`
  html {
    font-size: 16px;

    @media (max-width: ${breakpoints.laptop}) {
      font-size: 14px;
    }

    @media (max-width: ${breakpoints.device}) {
      font-size: 14px;
    }
  }
  
  body {
    margin: 0;
    background: ${colors.backgroundGray};
  }
  
  h1, h2, h3, h4, h5, h6, p, a {
    margin: 0;
    padding: 0;
    white-space: pre-wrap;
    overflow-wrap: break-word;
    word-break: break-word;
  }
  
  h1, h2, h3, h4, h5, h6 {
    font-family: Merriweather, Roboto, sans-serif;
    font-style: normal;
    font-weight: 900;
    line-height: 124%;
    color: ${colors.accentBlack};
  }
  
  h1 {
    font-size: 3.75em;
    @media (max-width: ${breakpoints.device}) {
      font-size: 2.5em;
    }
  }
  
  h2 {
    font-size: 3.25em;
    @media(max-width: ${breakpoints.device}) {
      font-size: 1.75em;
    }
  }
  
  h3 {
    font-size: 2.25em;
    @media(max-width: ${breakpoints.device}) {
      font-size: 1.6em;
    }
  }
  
  h4 {
    font-size: 1.5em;
  }
  
  h5 {
    font-size: 1.25em;
  }
  
  h6 {
    font-size: 1.125em;
  }
  
  p, a {
    font-family: Lora, Roboto, serif;
    font-style: normal;
    font-weight: 400;
    font-size: 1em;
    line-height: 160%;
    color: ${colors.accentBlack};
  }
  
  a {
    :hover {
      opacity: 0.65;
    }
    :active {
      opacity: 0.9;
    }
  }
  
  b, strong {
    font-weight: 900;
  }
  
  @font-face {
    font-display: swap;
    font-style: normal;
    font-weight: 400;
    font-family: Merriweather, Lora, Roboto, sans-serif;
  }
`;
