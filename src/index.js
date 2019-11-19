import React from "react";
import ReactDOM from "react-dom";
import App from "./App.js";
import * as serviceWorker from "./serviceWorker";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
body {
  
  font-family: Montserrat,Trebuchet,sans-serif;
  font-style: normal;
    font-weight: 600;
    color: #555;
    letter-spacing: normal;
  background-color: #fff;
  -webkit-font-smoothing: antialiased;

}
h1 {
  margin: .67em 0; 
  margin-top: 0;
    margin-bottom: -.1em;
    line-height: 1.2em;
    font-style: normal;
    font-size: 42px;
    -webkit-font-smoothing: antialiased;

}
h2 {
  font-weight: 400;
}
p {
 
  font-size: 18px;
  font-style: normal;
    font-weight: 400;
    line-height: 1.5em;
    color: #6e6e6e;
    -webkit-font-smoothing: antialiased;
  }
`;

ReactDOM.render(
  <>
    <App />
    <GlobalStyle />
  </>,
  document.getElementById("root"),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
