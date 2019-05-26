import React from "react";
import styles from "./SearchText.module.css";
import { StoreContext } from "../../store";

export default () => {
  const [, dispatch] = React.useContext(StoreContext);
  const setSearch = e => {
    dispatch({ type: "searchUser", payload: e.target.value });
  };
  return (
    <div className={styles.searchSection}>
      <input
        type="text"
        placeholder="Search"
        onChange={setSearch}
        className={styles.searchInput}
      />
    </div>
  );
};
