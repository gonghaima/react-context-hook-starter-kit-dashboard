import React, { useReducer, useContext } from "react";
import styles from "./Nav.module.css";
import { Star, VerifiedUser, People, AccountCircle, Inbox } from "../../icons";
// import { reducer } from "../../store";
import { connect } from "../../store";
import { StoreContext } from "../../store";

export default () => {
  // goTo = e => {
  //   console.log(e.target.value);
  //   e.preventDefault();
  // };
  // const { reducer, StoreContext } = connect;
  // const tt = useContext(StoreContext);
  // console.log(JSON.stringify("context-", tt));
  // const [state, dispatch] = useReducer(reducer, tt);
  // const dispatchvalues = val => {
  //   dispatch({ type: "setFilter", payload: val });
  // };

  // const sendFilter = (e, dis, tp) => {
  //   e.preventDefault();
  //   return dis({
  //     type: "setFilter",
  //     payload: tp
  //   });
  // };

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
          <div className={styles.nav}>
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
                <li>
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
                  <a
                    href="archived"
                    onClick={e => sendFilter(e, "archived")}
                  >
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
