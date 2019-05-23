import React from "react";
import styles from "./Main.module.css";
import { StoreContext } from "../../store";

export default ({ children }) => (
  <StoreContext.Consumer>
    {([state]) => {
      return <div className={styles.main}>{children}</div>;
    }}
  </StoreContext.Consumer>
);
