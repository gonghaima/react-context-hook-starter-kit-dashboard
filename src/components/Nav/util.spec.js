import { send } from "./util";

it("should dispatch and push history", done => {
  const dispatchMock = jest.fn();
  const historyMock = jest.fn();
  const ePreventDefaultMock = jest.fn();
  const evt = {};
  evt.preventDefault = ePreventDefaultMock;
  const his = {};
  his.push = historyMock;
  const sendBuilder = send(dispatchMock, his);
  sendBuilder(evt, "administrator");
  expect(ePreventDefaultMock.mock.calls.length).toBe(1);
  setTimeout(() => {
    expect(historyMock.mock.calls.length).toBe(1);
    done();
  }, 4000);
});
