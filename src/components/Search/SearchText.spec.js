import React from "react";
import ReactDOM from "react-dom";
import { StoreProvider } from "../../store";
import SearchText from "./SearchText";
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

test("SearchText with ReactDOM should render successfully", () => {
  act(() => {
    ReactDOM.render(
      <StoreProvider>
        <SearchText />
      </StoreProvider>,
      container
    );
  });
  expect(container.children[0].attributes[0].value).toBe("searchSection");
});
