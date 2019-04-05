import React, { useReducer, createContext, useEffect } from "react";
import { userState, userReducers } from "./reducers/user";
import userDataPromise from "./api/users";

// combine initial states
const initialState = { ...userState };

// combine reducers
const reducers = {
  ...userReducers
};

export const StoreContext = createContext(initialState);

export const reducer = (state, action) => {
  const act = reducers[action.type];
  const update = act(state, action.payload);
  return { ...state, ...update };
};

// export const connect = { reducer, StoreContext };

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

// export const useStore = () => {
//   return useContext(StoreContext);
// };
