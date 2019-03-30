import React from "react";
import styles from "./Header.module.css";
import { Dehaze } from "../../icons";

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.wrapper}>
        <div className={styles.leftWrapper}>
          <a href="/">
            <Dehaze />
          </a>
          <h4>Product Name</h4>
        </div>
        <div>right</div>
      </div>
    </div>
  );
};

export default Header;
