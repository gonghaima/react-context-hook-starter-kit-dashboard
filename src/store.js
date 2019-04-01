import React, { useReducer, createContext } from "react";
import reducer from "./reducer";
import usersDataPromise from "./api/users";
export const StoreContext = createContext({});

//const initialState = { fruits: [], vegetables: [] };

const Store = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, {});
  useEffect(() => {
    usersDataPromise().then(userData => {
      dispatch({
        type: "userDataReady",
        payload: userData
      });
    });
  }, []);
  return (
    <StoreContext.Provider value={[state, dispatch]}>
      {children}
    </StoreContext.Provider>
  );
};
export default Store;
