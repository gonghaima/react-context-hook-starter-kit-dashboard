import React from "react";
import styles from "./ContentItem.module.css";
import { Person, MoreVert } from "../../icons";
import Avatar from "../Avatar";
import { useSpring, animated } from "react-spring";

export default ({ user }) => {
  const style = useSpring({ opacity: 1, from: { opacity: 0 } });
  return (
    <div className={styles.contentItemWrapper} data-test-id="dataContent">
      <Avatar>
        <Person />
      </Avatar>
      <animated.div style={style} className={styles.contentItemDetails}>
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
      </animated.div>
    </div>
  );
};
