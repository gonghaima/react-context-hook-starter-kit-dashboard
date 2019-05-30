import React from "react";
import styles from "./ContentItem.module.css";
import { Person, MoreVert } from "../../icons";
import Avatar from "../Avatar";

export default ({ user }) => {
  return (
    <div className={styles.contentItemWrapper} data-test-id="dataContent">
      <Avatar>
        <Person />
      </Avatar>
      <div className={styles.contentItemDetails}>
        <div className={styles.userSection}>
          <div className={styles.userName}>{user.fullName}</div>
          <small>{user.email}</small>
        </div>
        <div className={styles.detailsSection}>
          <small>{user.date}</small>
          <small>{user.lastLogin}</small>
          <small>
            <MoreVert />
          </small>
        </div>
      </div>
    </div>
  );
};
