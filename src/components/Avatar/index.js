import React from "react";
import styles from "./Avatar.module.css";

export default ({ children }) => (
  <div className={styles.contentItemIcon}>
    <div className={styles.avatar}>{children}</div>
  </div>
);
