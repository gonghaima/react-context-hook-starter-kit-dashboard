import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { StoreProvider, useStore } from "./store";
import styles from "./Base.scss";

const Main = () => (
  <StoreProvider>
    <App />
  </StoreProvider>
);
const rootElement = document.getElementById("root");
ReactDOM.render(<Main />, rootElement);
