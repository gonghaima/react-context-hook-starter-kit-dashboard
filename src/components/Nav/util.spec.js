import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { act } from "react-dom/test-utils";
import { StoreContext } from "../../store";
import { initialState } from "../../reducers";
import { send, generateNavItems } from "./util";

let container;
beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  document.body.removeChild(container);
  container = null;
});

it("should dispatch ", done => {
  const dispatchMock = jest.fn();
  const historyMock = jest.fn();

  const ePreventDefaultMock = jest.fn();
  const evt = {};
  evt.preventDefault = ePreventDefaultMock;
  const his = {};
  his.push = historyMock;
  const sendBuilder = send(dispatchMock, his);
  sendBuilder(evt, "administrator");
  expect(ePreventDefaultMock.mock.calls.length).toBe(1);
  done();
});

it("should attach onClick to routing event", () => {
  const ListC = () => generateNavItems(<h1>hello</h1>, "all", "dfs", "", "");

  act(() => {
    ReactDOM.render(
      <StoreContext.Provider
        value={[{ ...initialState, ...{ darkMode: true } }, () => {}]}
      >
        <Router>
          <ListC />
        </Router>
      </StoreContext.Provider>,
      container
    );
  });

  container.children[0].children[0].dispatchEvent(
    new MouseEvent("click", {
      view: window,
      bubbles: true,
      cancelable: true,
      buttons: 1
    })
  );

  expect(container.children[0].children[0].attributes[0].value).toEqual("all");
});
