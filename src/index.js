import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import GlobalStyle from "./styles/GlobalStyle.js";
import App from "./App.js";


import { library } from "@fortawesome/fontawesome-svg-core";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

library.add(faLinkedin, faGithub, faEnvelope);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />

  </React.StrictMode>,
);
