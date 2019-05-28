import { userState, userReducers } from "./user";
// import config from "../config";
import mockedUserData from "../mocks/userData";

it("should provide expected utils", () => {
  expect(userState.message).toEqual("");

  const setUserDataResult = userReducers.setUserData(userState, [
    { name: "steven" }
  ]);
  expect(setUserDataResult.users[0].name).toEqual("steven");
});

it("should validate state first", () => {
  userState.users = mockedUserData;
  const filteredStateNonAdmin = userReducers.setFilter(null, "nonAdmins");
  expect(filteredStateNonAdmin).toEqual(null);

  const filteredStateAdmin = userReducers.setFilter({}, "administrator");
  expect(filteredStateAdmin).toEqual({});
});

it("should provide setFilter function", () => {
  userState.users = mockedUserData;
  const filteredStateNonAdmin = userReducers.setFilter(userState, "nonAdmins");
  expect(filteredStateNonAdmin.filteredData[0].administrator).toEqual(false);

  const filteredStateAdmin = userReducers.setFilter(userState, "administrator");
  expect(filteredStateAdmin.filteredData[0].administrator).toEqual(true);

  const filteredStateArchived = userReducers.setFilter(userState, "archived");
  expect(filteredStateArchived.filteredData[0].archived).toEqual(true);

  const filteredStateAll = userReducers.setFilter(userState, "all");
  expect(filteredStateAll.filteredData[0].archived).toEqual(false);

  const filteredStateFavorites = userReducers.setFilter(userState, "favorites");
  expect(filteredStateFavorites.filteredData[0].favorite).toEqual(true);
});

it("should provide searchUser function", () => {
  //   userState.users = userState.selected;
  // console.log(userState);
  userState.users = mockedUserData;
  const filteredStateSearchedResult = userReducers.searchUser(userState, "c");
  expect(filteredStateSearchedResult.filteredData[0].email).toEqual(
    "suzy.cuningham@gmail.com"
  );
});
