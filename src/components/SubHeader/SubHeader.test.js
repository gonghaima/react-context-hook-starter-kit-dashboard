import React, { useReducer, createContext, useEffect } from "react";
import ReactDOM from "react-dom";
import { StoreProvider, StoreContext, reducer } from "../../store";
import { initialState } from "../../reducers";
import SubHeader from "./index";
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

test("Header with ReactDOM in darkMode should render successfully", () => {
  act(() => {
    ReactDOM.render(
      <StoreContext.Provider
        value={[{ ...initialState, ...{ darkMode: true } }, () => {}]}
      >
        <SubHeader />
      </StoreContext.Provider>,
      container
    );
  });
  expect(container.children[0].attributes[0].value).toBe("subheader dark");
});
