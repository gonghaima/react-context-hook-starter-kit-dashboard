import React, { useContext } from "react";
import styles from "./Content.module.css";
import Search from "../Search";
import ContentItem from "../ContentItem";
import { StoreContext } from "../../store";

// export default () => {
//   const [{ users }] = useContext(StoreContext);

//   return (
//     <div className={styles.contentWrapper}>
//       <div className={styles.contentItemWrapper}>
//         <Search />
//         {users &&
//           users.map((user, key) => <ContentItem key={key} user={user} />)}
//       </div>
//     </div>
//   );
// };
export default () => {
  return (
    <StoreContext.Consumer>
      {([state]) => (
        <div className={styles.contentWrapper}>
          <div className={styles.contentItemWrapper}>
            <Search />
            {state.filteredData &&
              state.filteredData.map((user, key) => (
                <ContentItem key={key} user={user} />
              ))}
          </div>
        </div>
      )}
    </StoreContext.Consumer>
  );
};
