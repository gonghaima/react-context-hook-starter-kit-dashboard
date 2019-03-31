import React from "react";
import styles from "./Search.module.css";
import { Search } from "../../icons";
import SearchText from "./SearchText";

export default () => {
  return (
    <div className={styles.search}>
      <div className={styles.searchIconWrapper}>
        <div className={styles.searchIconWrapper}>
          <Search />
        </div>

        <SearchText />
      </div>
    </div>
  );
};
