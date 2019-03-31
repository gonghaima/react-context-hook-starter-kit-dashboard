import React from "react";
import styles from "./Content.module.css";
import Search from "../Search";
import { Person, MoreVert } from "../../icons";

export default () => {
  return (
    <div className={styles.contentWrapper}>
      <div className={styles.contentItemWrapper}>
        <Search />
      </div>
    </div>
  );
};
