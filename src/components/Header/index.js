import React from "react";
import styles from "./Header.module.scss";
import { BurstMode, ChromeReaderMode, Dehaze } from "../../icons";
import { StoreContext } from "../../store";

export default () => (
  <StoreContext.Consumer>
    {([state, dispatch]) => {
      const toggleDisplay = () => {
        return dispatch({
          type: "toggleDisplayMode",
          payload: ""
        });
      };
      return (
        <div
          className={`${styles.header} ${state.darkMode ? styles.dark : ""}`}
        >
          <div className={styles.wrapper}>
            <div className={styles.leftWrapper}>
              <a href="/">
                <Dehaze />
              </a>
              <h4>Product Name</h4>
            </div>
            <div className={styles.icon} onClick={e => toggleDisplay(e)}>
              {state.darkMode ? <BurstMode /> : <ChromeReaderMode />}
            </div>
          </div>
        </div>
      );
    }}
  </StoreContext.Consumer>
);
