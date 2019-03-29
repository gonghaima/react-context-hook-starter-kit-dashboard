import React from "react";
import styles from "./SubHeader.module.css";

const SubHeader = () => {
  return (
    <div className={styles.subheader}>
      <h3>Users</h3>
      <div className={styles.container}>All</div>
    </div>
  );
};

export default SubHeader;
