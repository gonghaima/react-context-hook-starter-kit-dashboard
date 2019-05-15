import React from "react";
import { Link } from "react-router-dom";
import styles from "./Nav.module.scss";
import { Star, VerifiedUser, People, AccountCircle, Inbox } from "../../icons";
import { StoreContext } from "../../store";

export default () => {
  const [state, dispatch] = React.useContext(StoreContext);
  const sendFilter = (e, tp) => {
    // e.preventDefault();
    return dispatch({
      type: "setFilter",
      payload: tp
    });
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
            <Link to="all" onClick={e => sendFilter(e, "all")}>
              <div>
                <AccountCircle />
              </div>
              <div>
                <span>All Users</span>
              </div>
            </Link>
          </li>
          <li
            className={`${
              state.selected.queryValue === "favorites" ? styles.selected : ""
            }`}
          >
            <Link to="favorites" onClick={e => sendFilter(e, "favorites")}>
              <div>
                <Star />
              </div>
              <div>
                <span>Favorites</span>
              </div>
            </Link>
          </li>
          <li
            className={`${
              state.selected.queryValue === "administrator"
                ? styles.selected
                : ""
            }`}
          >
            <Link
              to="administrator"
              onClick={e => sendFilter(e, "administrator")}
            >
              <div>
                <VerifiedUser />
              </div>
              <div>
                <span>Administrator</span>
              </div>
            </Link>
          </li>
          <li
            className={`${
              state.selected.queryValue === "nonAdmins" ? styles.selected : ""
            }`}
          >
            <Link to="nonAdmins" onClick={e => sendFilter(e, "none-Admins")}>
              <div>
                <People />
              </div>
              <div>
                <span>None-Admins</span>
              </div>
            </Link>
          </li>
          <li
            className={`${
              state.selected.queryValue === "archived" ? styles.selected : ""
            }`}
          >
            <Link to="archived" onClick={e => sendFilter(e, "archived")}>
              <div>
                <Inbox />
              </div>
              <div>
                <span>Archived</span>
              </div>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
