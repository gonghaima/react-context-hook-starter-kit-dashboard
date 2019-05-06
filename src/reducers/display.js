export const displayState = {
  darkMode: false
};

export const displayReducers = {
  toggleDisplayMode: (state, payload) => {
    const data = {
      ...state,
      darkMode: !state.darkMode
    };
    return data;
  }
};
