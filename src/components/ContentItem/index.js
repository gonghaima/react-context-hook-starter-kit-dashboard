import React from "react";
import styles from "./ContentItem.module.css";
import { Person, MoreVert } from "../../icons";
import Avatar from "../Avatar";
import { useSpring, animated } from "react-spring";

export default ({ user }) => {
  const style = useSpring({
    config: { duration: 2000 },
    opacity: 1,
    transform: "translate3d(0,0,0)",
    from: { opacity: 0, transform: "translate3d(0px, -62px, -135px)" }
  });

  return (
    <animated.div
      style={style}
      className={styles.contentItemWrapper}
      data-test-id="dataContent"
    >
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
    </animated.div>
  );
};
