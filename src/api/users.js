import mockedUserData from "../mocks/userData";
const userDataPromise = new Promise(resolve => {
  resolve(mockedUserData);
});

export default userDataPromise;
