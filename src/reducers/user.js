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
    const data = { ...state, users: payload, filteredData: payload };
    return data;
  },
  searchUser: (state, payload) => {
    state.filteredData = state.users.filter(
      user => user.fullName.includes(payload) || user.email.includes(payload)
    );

    return state;
  },
  setFilter: (state, payload) => {
    if (payload === "favorites") {
      state.filteredData = state.filteredData.filter(
        user => user.favorite === true
      );
      state.selected = config.userMapping.favorites;
    }
    if (payload === "all") {
      state.filteredData = state.users;
      state.selected = config.userMapping.all;
    }
    if (payload === "administrator") {
      state.filteredData = state.users.filter(
        user => user.administrator === true
      );
      state.selected = config.userMapping.administrator;
    }

    if (payload === "none-Admins") {
      state.filteredData = state.users.filter(
        user => user.administrator !== true
      );
      state.selected = config.userMapping.nonAdmin;
    }
    if (payload === "archived") {
      state.filteredData = state.users.filter(user => user.archived === true);
      state.selected = config.userMapping.archived;
    }
    return state;
  }
};
