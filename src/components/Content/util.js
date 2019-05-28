export const send = (dispatch, history, payload) => {
  dispatch({
    type: "setFilter",
    payload
  });
  history.push(payload);
};
