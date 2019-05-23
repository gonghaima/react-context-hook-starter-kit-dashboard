import { reducer, StoreProvider } from "./store";
import { testHook } from "./config/testHook";
import { act } from "react-dom/test-utils";

let storeP;

beforeEach(() => {
  testHook(() => {
    storeP = StoreProvider({ children: "my test children" });
  });
});

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

it("should create a store instance", async () => {
  act(() => {
    return storeP.props.children;
  });
  expect(storeP.props.children).toEqual("my test children");
});
