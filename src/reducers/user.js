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
    const data = { users: payload };
    return data;
  },
  setFilter: (state, payload) => {
    console.log("payload-", payload);
    console.log("state-", state);
    state.users = state.users.filter(user => user.favorite === true);
    return state;
  }
};
