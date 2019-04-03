import config from "../config";

export const userState = {
  data: [],
  filteredData: [],
  message: "",
  query: "All Users",
  selected: config.userMapping.all
};

export const userReducers = {
  setUserData: (state, payload) => {
    // debugger;
    // return { user: { ...state.user, loggedIn: true } };
    const data = { user: payload };
    debugger;
    return data;
  }
};
