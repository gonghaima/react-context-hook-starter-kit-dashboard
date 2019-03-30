import React from "react";
import styles from "./SubHeader.module.css";
import { MoreVert, Sort, Settings, ViewModule } from "../../icons";

const SubHeader = () => {
  return (
    <div className={styles.subheader}>
      <h3>Users</h3>
      <div className={styles.container}>All</div>
      <div className={styles.iconWrapper}>
        <ViewModule />
        <Sort />
        <Settings />
        <MoreVert />
      </div>
    </div>
  );
};

export default SubHeader;
