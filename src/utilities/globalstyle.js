import { createGlobalStyle } from "styled-components"
import normalize from "./normalize"

const GlobalStyle = createGlobalStyle`
  ${normalize}
  
  html {
  box-sizing: border-box;
  font-size: 62.5%;
}

*, *:before, *:after {
  box-sizing: inherit;
}

body {
    font-size: 1.6rem;
    line-height: 1.4;
    font-family: 'Roboto Mono', monospace;
}

h1, h2, h3, h4, h5, h6 {
	margin-top: 0;
	margin-bottom: 0.5rem;
}

`
export default GlobalStyle
