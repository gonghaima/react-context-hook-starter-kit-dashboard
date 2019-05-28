import React, { useEffect } from "react";
import styles from "./Content.module.css";
import Search from "../Search";
import ContentItem from "../ContentItem";
import { StoreContext } from "../../store";
import { send } from "./util";

export default ({ history, location }) => {
  const [state, dispatch] = React.useContext(StoreContext);
  useEffect(() => {
    if (location.pathname.slice(1) !== state.selected.queryValue)
      send(dispatch, history, location.pathname.slice(1));
  });
  return (
    <div
      className={`${styles.contentWrapper} ${
        state.darkMode ? styles.dark : ""
      }`}
    >
      <div className={styles.contentItemWrapper}>
        <Search />
        {state.filteredData &&
          state.filteredData.map((user, key) => (
            <ContentItem key={key} user={user} />
          ))}
      </div>
    </div>
  );
};
