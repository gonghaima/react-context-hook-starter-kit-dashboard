import React, { useContext, useEffect } from "react";
import { StoreContext } from "/src/store";

import styles from "./Form.module.css";

const Form = () => {

  const [state, dispatch] = useContext(StoreContext);

  return (
    <div>
      <h1>Project Phoenix</h1>
      <div className="chips" />

      <div className={styles.inputfield}>
        <input
          className={styles.input}
          name="name"
          placeholder="Enter your name"
          onBlur={e =>
            e.target.value &&
            dispatch({ type: "addFruit", payload: e.target.value })
          }
        />
      </div>
      <br />
      <br />
      <div>
        <button
          className={styles.m}
          onClick={() => dispatch({ type: "addFruit", payload: "Banana" })}
        >
          Add Banana
        </button>

        <button
          className={styles.m}
          onClick={() => dispatch({ type: "addFruit", payload: "Apple" })}
        >
          Add Apple
        </button>
      </div>
      <ul>
        {state.fruits &&
          state.fruits.map((fruit, idx) => (
            <li key={idx}>
              {fruit}
              <button
                onClick={() => dispatch({ type: "deleteFruit", payload: idx })}
              >
                Delete
              </button>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Form;
