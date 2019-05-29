import React, { useEffect } from "react";
import styles from "./Content.module.css";
import Search from "../Search";
import ContentItem from "../ContentItem";
import { StoreContext } from "../../store";
import { send } from "./util";

export default ({ location }) => {
  const [state, dispatch] = React.useContext(StoreContext);
  useEffect(() => {
    send(dispatch, location, state);
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
