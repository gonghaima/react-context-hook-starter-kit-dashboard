import React from "react";
import styles from "./SearchText.module.css";

export default () => {
  return (
    <div className={styles.searchSection}>
      <input type="text" placeholder="Search" className={styles.searchInput} />
    </div>
  );
};
