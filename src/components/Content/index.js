import React from "react";
import styles from "./Content.module.css";
import Search from "../Search";
import ContentItem from "../ContentItem";
import { useStore } from "../../store";

export default () => {
  const { state, dispatch } = useStore();
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
