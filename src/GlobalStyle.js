// src/GlobalStyle.js
import { createGlobalStyle } from "styled-components";
import { colors } from "./theme";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: 'Inter', sans-serif;
  }
  a {
    text-decoration: none;
	 color: white;
  }
  
  .orange-cat {
		color: ${colors.orange}
  }
`;

export default GlobalStyle;
