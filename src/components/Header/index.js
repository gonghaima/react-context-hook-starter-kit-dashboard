import React from "react";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.wrapper}>
        <div className={styles.leftWrapper}>
          <a href="/">--</a>
          <h4>Product Name</h4>
        </div>
        <div>right</div>
      </div>
    </div>
  );
};

export default Header;
