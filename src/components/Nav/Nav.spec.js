import React from "react";
import ReactDOM from "react-dom";
import { StoreProvider } from "../../store";
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
      <StoreProvider>
        <Nav />
      </StoreProvider>,
      container
    );
  });
  expect(container.textContent).toBe(
    "All UsersFavoritesAdministratorNone-AdminsArchived"
  );
});
