import { displayState, displayReducers } from "./display";

it("should provide display utils", () => {
  expect(displayState.darkMode).toEqual(false);

  const setDisplayModeResult = displayReducers.toggleDisplayMode(
    displayState,
    {}
  );
    expect(setDisplayModeResult.darkMode).toEqual(true);
});
