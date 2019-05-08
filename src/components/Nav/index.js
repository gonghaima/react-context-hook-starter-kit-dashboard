import React, { useReducer, useContext } from "react";
import styles from "./Nav.module.scss";
import { Star, VerifiedUser, People, AccountCircle, Inbox } from "../../icons";
import { StoreContext } from "../../store";

export default () => {
  return (
    <StoreContext.Consumer>
      {([state, dispatch]) => {
        const sendFilter = (e, tp) => {
          e.preventDefault();
          return dispatch({
            type: "setFilter",
            payload: tp
          });
        };
        return (
          <div className={`${styles.nav} ${state.darkMode ? styles.dark : ""}`}>
            <div className={styles.itemWrapper}>
              <ul className={styles.itemUl}>
                <li>
                  <a href="all" onClick={e => sendFilter(e, "all")}>
                    <div>
                      <AccountCircle />
                    </div>
                    <div>
                      <span>All Users</span>
                    </div>
                  </a>
                </li>
                <li className={styles.active}>
                  <a href="all" onClick={e => sendFilter(e, "favorites")}>
                    <div>
                      <Star />
                    </div>
                    <div>
                      <span>Favorites</span>
                    </div>
                  </a>
                </li>
                <li>
                  <a
                    href="administrator"
                    onClick={e => sendFilter(e, "administrator")}
                  >
                    <div>
                      <VerifiedUser />
                    </div>
                    <div>
                      <span>Administrator</span>
                    </div>
                  </a>
                </li>
                <li>
                  <a
                    href="none-Admins"
                    onClick={e => sendFilter(e, "none-Admins")}
                  >
                    <div>
                      <People />
                    </div>
                    <div>
                      <span>None-Admins</span>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="archived" onClick={e => sendFilter(e, "archived")}>
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
      }}
    </StoreContext.Consumer>
  );
};
