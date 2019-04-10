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
    const data = { users: payload, filteredData: payload };
    return data;
  },
  setFilter: (state, payload) => {
    console.log("payload-", payload);
    console.log("state-", state);
    if (payload === "favorites")
      state.filteredData = state.filteredData.filter(
        user => user.favorite === true
      );
    if (payload === "all") state.filteredData = state.users;
    if (payload === "administrator")
      state.filteredData = state.users.filter(
        user => user.administrator === true
      );

    if (payload === "none-Admins")
      state.filteredData = state.users.filter(
        user => user.administrator !== true
      );
    if (payload === "archived")
      state.filteredData = state.users.filter(user => user.archived === true);
    return state;
  }
};
