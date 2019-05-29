import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router} from "react-router-dom";
import { StoreContext } from "../../store";
import { initialState } from "../../reducers";
import Nav from "./index";
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

test("Nav with ReactDOM should render successfully", () => {
  act(() => {
    ReactDOM.render(
      <StoreContext.Provider value={[initialState, () => {}]}>
        <Router>
          <Nav />
        </Router>
      </StoreContext.Provider>,
      container
    );
  });
  expect(container.children[0].attributes[0].value).toBe("nav ");
});

test("Nav with ReactDOM in darkMode should render successfully", () => {
  act(() => {
    ReactDOM.render(
      <StoreContext.Provider
        value={[{ ...initialState, ...{ darkMode: true } }, () => {}]}
      >
        <Router>
          <Nav />
        </Router>
      </StoreContext.Provider>,
      container
    );
  });
  expect(container.children[0].attributes[0].value).toBe("nav dark");
});
