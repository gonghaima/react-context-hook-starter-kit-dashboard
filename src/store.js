import React, { useReducer, createContext, useContext, useEffect } from "react";
import { userState, userReducers } from "./reducers/user";
import userDataPromise from "./api/users";

// combine initial states
const initialState = { ...userState };

// combine reducers
const reducers = {
  ...userReducers
};

export const StoreContext = createContext(initialState);

const reducer = (state, action) => {
  const act = reducers[action.type];
  const update = act(state, action.payload);
  return { ...state, ...update };
};

export const StoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    userDataPromise.then(data => {
      debugger;
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

// export const useStore = () => {
//   return useContext(StoreContext);
// };
