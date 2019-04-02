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
    // return { user: { ...state.user, loggedIn: true } };
    return { user: { ...state.user, ...payload.users } };
  }
};
