import React from "react";
import styles from "./Nav.module.scss";
import { Star, VerifiedUser, People, AccountCircle, Inbox } from "../../icons";
import { StoreContext } from "../../store";
import { generateNavItems } from "./util";

export default props => {
  const [state] = React.useContext(StoreContext);
  const navItemsData = [
    { icon: <AccountCircle />, key: "all", display: "All Users" },
    { icon: <Star />, key: "favorites", display: "Favorites" },
    { icon: <VerifiedUser />, key: "administrator", display: "Administrator" },
    { icon: <People />, key: "nonAdmins", display: "None-Admins" },
    { icon: <Inbox />, key: "archived", display: "Archived" }
  ];
  return (
    <div className={`${styles.nav} ${state.darkMode ? styles.dark : ""}`}>
      <div className={styles.itemWrapper}>
        <ul className={styles.itemUl}>
          {navItemsData.map(({ icon, key, display }) =>
            generateNavItems(
              icon,
              key,
              display,
              state.selected.queryValue,
              styles.selected
            )
          )}
        </ul>
      </div>
    </div>
  );
};
