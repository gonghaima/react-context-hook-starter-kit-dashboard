import React from "react";
import styles from "./Nav.module.css";
import { Star, VerifiedUser, People, AccountCircle, Inbox } from "../../icons";

export default () => {
  return (
    <div className={styles.nav}>
      <div className={styles.itemWrapper}>
        <ul className={styles.itemUl}>
          <li>
            <a href="">
              <div>
                <AccountCircle />
              </div>
              <div>
                <span>All Users</span>
              </div>
            </a>
          </li>
          <li>
            <a href="">
              <div>
                <Star />
              </div>
              <div>
                <span>Favorites</span>
              </div>
            </a>
          </li>
          <li>
            <a href="">
              <div>
                <VerifiedUser />
              </div>
              <div>
                <span>Administrator</span>
              </div>
            </a>
          </li>
          <li>
            <a href="">
              <div>
                <People />
              </div>
              <div>
                <span>None-Admins</span>
              </div>
            </a>
          </li>
          <li>
            <a href="">
              <div>
                <Inbox />
              </div>
              <div>
                <span>Archived</span>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
