import React from "react";
import { NavLink } from "react-router-dom";
export const send = dispatch => (e, tp) => {
  e.preventDefault();
  dispatch({
    type: "setFilter",
    payload: tp
  });
};

export const generateNavItems = (
  children,
  key,
  displayText,
  qVal,
  styleSelected
) => (
  <li key={key} className={`${qVal === key ? styleSelected : ""}`}>
      <NavLink to={`/${key}`} data-test-id={key}>
      <div>{children}</div>
      <div>
        <span>{displayText}</span>
      </div>
    </NavLink>
  </li>
);
