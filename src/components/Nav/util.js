export const send = (dispatch, history) => (e, tp) => {
  e.preventDefault();
  dispatch({
    type: "setFilter",
    payload: tp
  });
  setTimeout(() => {
    history.push(tp);
  }, 2000);
};
