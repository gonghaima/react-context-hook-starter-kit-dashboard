import { send } from "./util";

it("should check matched routing and not trigger the dispatch function", () => {
  const dispatchFn = jest.fn();
  const historyFn = jest.fn();
  historyFn.push = () => {};
  const location = {};
  location.pathname = "/all";

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
    ],
    selected: { queryValue: "all" }
  };

  send(dispatchFn, historyFn, location, mockState);

  expect(dispatchFn.mock.calls.length).toBe(0);
});

it("should check not matched routing and trigger the dispatch function", () => {
  const dispatchFn = jest.fn();
  const historyFn = jest.fn();
  historyFn.push = () => {};
  const location = {};
  location.pathname = "/all";

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
    ],
    selected: { queryValue: "" }
  };

  send(dispatchFn, historyFn, location, mockState);

  expect(dispatchFn.mock.calls.length).toBe(1);
});
