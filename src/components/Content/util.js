export const send = (dispatch, location, state) => {
  if (location.pathname.slice(1) !== state.selected.queryValue) {
    dispatch({
      type: "setFilter",
      payload: location.pathname.slice(1)
    });
  }
};
