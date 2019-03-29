import React from "react";
import styles from "./Nav.module.css";

const Nav = () => {
  return (
    <div className={styles.nav}>
      <div className={styles.itemWrapper}>
        <ul className={styles.itemUl}>
          <li>All</li>
          <li>Favorites</li>
          <li>Administrator</li>
          <li>None-Admins</li>
          <li>Archived</li>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
