import { createGlobalStyle } from "styled-components";
import BackgroundImage from "../assets/images/background.png";

const GlobalStyle = createGlobalStyle`

  :root {
    --font-title: "Patrick Hand", cursive;
    --font-subtitle:"Merriweather", serif;
    --primary-color:  #A4D9BA;
    --secondary-color: #EFECE5;

  }

  

  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color: white;
    background-image: url(${BackgroundImage})
  }

  a {
  text-decoration: none;
  color: inherit;
  }
`;

export default GlobalStyle;
