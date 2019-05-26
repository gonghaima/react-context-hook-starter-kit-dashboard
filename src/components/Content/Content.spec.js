import React from "react";
import ReactDOM from "react-dom";
import { StoreContext } from "../../store";
import ContentComponent from "./index";
import { act } from "react-dom/test-utils";

let container;
let containerDarkMode;
beforeEach(() => {
  container = document.createElement("div");
  containerDarkMode = document.createElement("div");
  document.body.appendChild(container);
  document.body.appendChild(containerDarkMode);
});

afterEach(() => {
  document.body.removeChild(container);
  document.body.removeChild(containerDarkMode);
  container = null;
  containerDarkMode = null;
});

test("Header with ReactDOM in darkMode should render successfully", () => {
  act(() => {
    const mockState = {
      filteredData: [
        {
          id: 0,
          fullName: "Suzy Cuningham",
          email: "suzy.cuningham@gmail.com",
          date: "Oct 1, 2015",
          lastLogin: "1 year ago",
          administrator: true,
          favorite: true,
          archived: false
        }
      ]
    };

    const mockDarkModeState = { ...mockState, ...{ darkMode: true } };

    ReactDOM.render(
      <StoreContext.Provider value={[mockState, () => {}]}>
        <ContentComponent />
      </StoreContext.Provider>,
      container
    );
    ReactDOM.render(
      <StoreContext.Provider value={[mockDarkModeState, () => {}]}>
        <ContentComponent />
      </StoreContext.Provider>,
      containerDarkMode
    );
  });
  expect(container.children[0].attributes[0].value).toBe("contentWrapper ");
  expect(containerDarkMode.children[0].attributes[0].value).toBe(
    "contentWrapper dark"
  );
});
