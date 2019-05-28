import React from "react";
export const send = (dispatch, history) => (e, tp) => {
  e.preventDefault();
  dispatch({
    type: "setFilter",
    payload: tp
  });
  history.push(tp);
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
    <a href="/" id={key} onClick={e => routeTo(e, key)}>
      <div>{children}</div>
      <div>
        <span>{displayText}</span>
      </div>
    </a>
  </li>
);
