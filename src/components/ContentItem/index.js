import React from "react";
import styles from "./ContentItem.module.css";
import { Person, MoreVert } from "../../icons";
import Avatar from "../Avatar";

export default () => {
  return (
    <div className={styles.contentItemWrapper}>
      <Avatar>
        <Person />
      </Avatar>
      <div className={styles.contentItemDetails}>
        <div className={styles.userSection}>
          <div className={styles.userName}>Suzy Cuningham</div>
          <small>suzy.cuningham@gmail.com</small>
        </div>
        <div className={styles.detailsSection}>
          <small>Oct 1, 2015</small>
          <small>1 year ago</small>
          <small>
            <MoreVert />
          </small>
        </div>
      </div>
    </div>
  );
};
