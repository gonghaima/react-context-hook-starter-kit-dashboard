import React from "react";
import styles from "./SubHeader.module.css";
import { MoreVert, Sort, Settings, ViewModule } from "../../icons";
import { StoreContext } from "../../store";

export default () => (
  <StoreContext.Consumer>
    {([state]) => {
      return (
        <div className={styles.subheader}>
          <h3>Users</h3>
          <div className={styles.container}>{state.selected.displayText}</div>
          <div className={styles.iconWrapper}>
            <ViewModule />
            <Sort />
            <Settings />
            <MoreVert />
          </div>
        </div>
      );
    }}
  </StoreContext.Consumer>
);
