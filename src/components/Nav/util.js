import React from "react";
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

export const generateNavItems = (
  children,
  routeTo,
  key,
  displayText,
  qVal,
  styleSelected
) => (
  <li key={key} className={`${qVal === key ? styleSelected : ""}`}>
    <a href="/" onClick={e => routeTo(e, key)}>
      <div>{children}</div>
      <div>
        <span>{displayText}</span>
      </div>
    </a>
  </li>
);
