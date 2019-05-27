export const send = dispatch => e => {
  e.preventDefault();
  dispatch({ type: "searchUser", payload: e.target.value });
};
