import React, { useContext } from "react";
import styles from "./Content.module.css";
import Search from "../Search";
import ContentItem from "../ContentItem";
import { StoreContext } from "../../store";

export default () => {
  const contextValues = useContext(StoreContext);
  console.log(JSON.stringify(contextValues));

  return (
    <div className={styles.contentWrapper}>
      <div className={styles.contentItemWrapper}>
        <Search />
        <ContentItem />
        <ContentItem />
        <ContentItem />
      </div>
    </div>
  );
};
