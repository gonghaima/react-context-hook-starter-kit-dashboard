import React, { useReducer, createContext, useEffect } from "react";
import reducers from "./reducers";
import userDataPromise from "./api/users";

// combine initial states
const { state } = reducers;

export const StoreContext = createContext(state);

export const reducer = (state, action) => {
  const act = reducers[action.type];
  const update = act(state, action.payload);
  return { ...state, ...update };
};

export const StoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, {});
  useEffect(() => {
    userDataPromise.then(data => {
      dispatch({
        type: "setUserData",
        payload: data
      });
    });
  }, []);

  return (
    <StoreContext.Provider value={[state, dispatch]}>
      {children}
    </StoreContext.Provider>
  );
};
