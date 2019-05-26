import React, { useReducer, createContext, useEffect } from "react";
import ReactDOM from "react-dom";
import { StoreProvider, StoreContext, reducer } from "../../store";
import { initialState } from "../../reducers";
import Header from "./index";
import { act } from "react-dom/test-utils";

let container;
beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  document.body.removeChild(container);
  container = null;
});

test("Header with ReactDOM should render successfully", () => {
  act(() => {
    ReactDOM.render(
      <StoreContext.Provider value={[initialState, () => {}]}>
        <Header />
      </StoreContext.Provider>,
      container
    );
  });
  expect(container.children[0].attributes[0].value).toBe("header ");
});

test("Header with ReactDOM in darkMode should render successfully", () => {
  act(() => {
    ReactDOM.render(
      <StoreContext.Provider
        value={[{ ...initialState, ...{ darkMode: true } }, () => {}]}
      >
        <Header />
      </StoreContext.Provider>,
      container
    );
  });
  expect(container.children[0].attributes[0].value).toBe("header dark");
});
