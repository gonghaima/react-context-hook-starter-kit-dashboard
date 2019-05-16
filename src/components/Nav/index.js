import React from "react";
import styles from "./Nav.module.scss";
import { Star, VerifiedUser, People, AccountCircle, Inbox } from "../../icons";
import { StoreContext } from "../../store";

export default props => {
  const history = props;
  const [state, dispatch] = React.useContext(StoreContext);
  const sendFilter = (e, tp) => {
    e.preventDefault();
    dispatch({
      type: "setFilter",
      payload: tp
    });
    setTimeout(() => {
      history.push(tp);
    }, 2000);
  };
  return (
    <div className={`${styles.nav} ${state.darkMode ? styles.dark : ""}`}>
      <div className={styles.itemWrapper}>
        <ul className={styles.itemUl}>
          <li
            className={`${
              state.selected.queryValue === "all" ? styles.selected : ""
            }`}
          >
            <a href="all" onClick={e => sendFilter(e, "all")}>
              <div>
                <AccountCircle />
              </div>
              <div>
                <span>All Users</span>
              </div>
            </a>
          </li>
          <li
            className={`${
              state.selected.queryValue === "favorites" ? styles.selected : ""
            }`}
          >
            <a href="favorites" onClick={e => sendFilter(e, "favorites")}>
              <div>
                <Star />
              </div>
              <div>
                <span>Favorites</span>
              </div>
            </a>
          </li>
          <li
            className={`${
              state.selected.queryValue === "administrator"
                ? styles.selected
                : ""
            }`}
          >
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
          <li
            className={`${
              state.selected.queryValue === "nonAdmins" ? styles.selected : ""
            }`}
          >
            <a href="nonAdmins" onClick={e => sendFilter(e, "nonAdmins")}>
              <div>
                <People />
              </div>
              <div>
                <span>None-Admins</span>
              </div>
            </a>
          </li>
          <li
            className={`${
              state.selected.queryValue === "archived" ? styles.selected : ""
            }`}
          >
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
};
