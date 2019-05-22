import { reducer } from "./store";

it("should create a reducer instance", () => {
  const reducerInstance = reducer(
    {
      darkMode: false
    },
    {
      type: "setUserData",
      payload: {}
    }
  );
  const currentState = { darkMode: false, filteredData: {}, users: {} };
  expect(reducerInstance).toEqual(currentState);
});
