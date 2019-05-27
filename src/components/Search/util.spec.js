import { send } from "./util";

it("should trigger the send function", () => {
  const dispatchFn = jest.fn();
  const preventDefaultFn = jest.fn();
  const sendUtil = send(dispatchFn);
  let e = {};
  e.preventDefault = preventDefaultFn;
  e.target = {};
  e.target.value = "mocked value";
  sendUtil(e);
  expect(preventDefaultFn.mock.calls.length).toBe(1);
  expect(dispatchFn.mock.calls.length).toBe(1);
});
