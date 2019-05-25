import React from "react";
import styles from "./Nav.module.scss";
import { Star, VerifiedUser, People, AccountCircle, Inbox } from "../../icons";
import { StoreContext } from "../../store";
import { send } from "./util";

export default props => {
  const history = props;
  const [state, dispatch] = React.useContext(StoreContext);
  const sendFilter = send(dispatch, history);
  const generateAnchor = (
    children,
    sf,
    key,
    displayText,
    qVal,
    styleSelected
  ) => (
    <li className={`${qVal === key ? styleSelected : ""}`}>
      <a href="/" onClick={e => sf(e, key)}>
        <div>{children}</div>
        <div>
          <span>{displayText}</span>
        </div>
      </a>
    </li>
  );
  return (
    <div className={`${styles.nav} ${state.darkMode ? styles.dark : ""}`}>
      <div className={styles.itemWrapper}>
        <ul className={styles.itemUl}>
          {generateAnchor(
            <AccountCircle />,
            sendFilter,
            "all",
            "All Users",
            state.selected.queryValue,
            styles.selected
          )}

          {generateAnchor(
            <Star />,
            sendFilter,
            "favorites",
            "Favorites",
            state.selected.queryValue,
            styles.selected
          )}

          {generateAnchor(
            <VerifiedUser />,
            sendFilter,
            "administrator",
            "Administrator",
            state.selected.queryValue,
            styles.selected
          )}

          {generateAnchor(
            <People />,
            sendFilter,
            "nonAdmins",
            "None-Admins",
            state.selected.queryValue,
            styles.selected
          )}

          {generateAnchor(
            <Inbox />,
            sendFilter,
            "archived",
            "Archived",
            state.selected.queryValue,
            styles.selected
          )}
        </ul>
      </div>
    </div>
  );
};
