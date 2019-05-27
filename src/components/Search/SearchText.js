import React from "react";
import styles from "./SearchText.module.css";
import { StoreContext } from "../../store";
import { send } from "./util";

export default () => {
  const [, dispatch] = React.useContext(StoreContext);
  // const setSearch = e => {
  //   dispatch({ type: "searchUser", payload: e.target.value });
  // };
  const setSearch = send(dispatch);
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
