export const send = (dispatch, history, location, state) => {
  if (location.pathname.slice(1) !== state.selected.queryValue) {
    dispatch({
      type: "setFilter",
      payload: location.pathname.slice(1)
    });
  }
};
