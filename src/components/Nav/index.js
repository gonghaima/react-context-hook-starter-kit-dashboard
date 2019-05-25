import React from "react";
import styles from "./Nav.module.scss";
import { Star, VerifiedUser, People, AccountCircle, Inbox } from "../../icons";
import { StoreContext } from "../../store";
import { send } from "./util";

export default props => {
  const history = props;
  const [state, dispatch] = React.useContext(StoreContext);
  const sendFilter = send(dispatch, history);
  const generateAnchor = (children, sf, key, displayText) => (
    <a href="/" onClick={e => sf(e, key)}>
      <div>{children}</div>
      <div>
        <span>{displayText}</span>
      </div>
    </a>
  );
  return (
    <div className={`${styles.nav} ${state.darkMode ? styles.dark : ""}`}>
      <div className={styles.itemWrapper}>
        <ul className={styles.itemUl}>
          <li
            className={`${
              state.selected.queryValue === "all" ? styles.selected : ""
            }`}
          >
            {generateAnchor(<AccountCircle />, sendFilter, "all", "All Users")}
          </li>
          <li
            className={`${
              state.selected.queryValue === "favorites" ? styles.selected : ""
            }`}
          >
            {generateAnchor(<Star />, sendFilter, "favorites", "Favorites")}
          </li>
          <li
            className={`${
              state.selected.queryValue === "administrator"
                ? styles.selected
                : ""
            }`}
          >
            {generateAnchor(
              <VerifiedUser />,
              sendFilter,
              "administrator",
              "Administrator"
            )}
          </li>
          <li
            className={`${
              state.selected.queryValue === "nonAdmins" ? styles.selected : ""
            }`}
          >
            {generateAnchor(<People />, sendFilter, "nonAdmins", "None-Admins")}
          </li>
          <li
            className={`${
              state.selected.queryValue === "archived" ? styles.selected : ""
            }`}
          >
            {generateAnchor(<Inbox />, sendFilter, "archived", "Archived")}
          </li>
        </ul>
      </div>
    </div>
  );
};
