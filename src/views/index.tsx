import store from "store";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "../App";
import * as serviceWorker from "../serviceWorker";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #1A2238;
    color: #fff;
    font-family: 'Roboto Condensed', sans-serif;

  }
`;

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
      <GlobalStyle />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
