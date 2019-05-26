import { toggleDisplay } from "./util";

it("should trigger the dispatch function", () => {
  const dispatchFn = jest.fn();
  const toggleDisplayUtil = toggleDisplay(dispatchFn);
  toggleDisplayUtil();
  expect(dispatchFn.mock.calls.length).toBe(1);
});
