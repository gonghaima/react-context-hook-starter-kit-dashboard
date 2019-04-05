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
    debugger;
    return data;
  }
};
