import React from "react";
import ReactDOM from "react-dom";
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

it("should dispatch and push history", done => {
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
  setTimeout(() => {
    expect(historyMock.mock.calls.length).toBe(1);
    done();
  }, 4000);
});

it("should attach onClick to routing event", () => {
  const mockRouteTo = jest.fn();
  const ListC = () =>
    generateNavItems(<h1>hello</h1>, mockRouteTo, "all", "dfs", "", "");

  act(() => {
    ReactDOM.render(
      <StoreContext.Provider
        value={[{ ...initialState, ...{ darkMode: true } }, () => {}]}
      >
        <ListC />
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
  expect(mockRouteTo).toHaveBeenCalled();
  expect(container.children[0].children[0].attributes[0].value).toEqual("/");
});
