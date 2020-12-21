import "dotenv/config";
import React from "react";
import ReactDOM from "react-dom";
import "./styles";
import { App } from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  rootElement
);
