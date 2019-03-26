import React, { useReducer, createContext } from "react";
import reducer from "./reducer";
export const StoreContext = createContext({});

//const initialState = { fruits: [], vegetables: [] };

const Store = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, {});
  return (
    <StoreContext.Provider value={[state, dispatch]}>
      {children}
    </StoreContext.Provider>
  );
};
export default Store;
