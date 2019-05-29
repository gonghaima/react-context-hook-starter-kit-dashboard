import React from "react";
import { Link } from "react-router-dom";
export const send = (dispatch, history) => (e, tp) => {
  e.preventDefault();
  dispatch({
    type: "setFilter",
    payload: tp
  });
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
    <Link to={`/${key}`} id={key}>
      <div>{children}</div>
      <div>
        <span>{displayText}</span>
      </div>
    </Link>
  </li>
);
