import React from "react";
import styles from "./SearchText.module.css";
import { StoreContext } from "../../store";
import { send } from "./util";

export default () => {
  const [, dispatch] = React.useContext(StoreContext);
  const setSearch = send(dispatch);
  return (
    <div className={styles.searchSection}>
      <input
        type="text"
        placeholder="Search"
        onChange={setSearch}
        className={styles.searchInput}
        data-test-id="textSearch"
      />
    </div>
  );
};
