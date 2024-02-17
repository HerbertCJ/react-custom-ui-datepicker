import { createGlobalStyle } from "styled-components";
import theme from "./theme";

const global = createGlobalStyle`
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      -webkit-font-smoothing: subpixel-antialiased;
      -moz-osx-font-smoothing: grayscale;
      font-family: ${theme.font.family};

      &::before,
      &::after {
        box-sizing: inherit;
      }
    }

    html {
      font-size: 62.5%;
      scroll-behavior: smooth;
      overflow-x: hidden;
    }

    body {
      font-size: 1.6rem;
    }
    
    ::-webkit-scrollbar, scrollbar {
      width: .6rem; 
    }
    
    ::-webkit-scrollbar-track, scrollbar-track {
      background-color: ${theme.colors.gray[200]};      
    }
    
    ::-webkit-scrollbar-thumb, scrollbar-thumb {
      border-radius: ${theme.spacings.xsmall};
      background-color: ${theme.colors.blue[300]};
    }
`;

export default global;
