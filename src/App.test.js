import React from "react";
import TestRenderer from "react-test-renderer";
import App from "./App";

it("renders without crashing", () => {
  const div = document.createElement("div");
  const appComponent = TestRenderer.create(<App />, div);
  expect(appComponent).toBeDefined();
  expect(appComponent.toJSON()).toMatchSnapshot();
});
