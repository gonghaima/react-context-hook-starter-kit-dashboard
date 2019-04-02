import mockedUserData from "../mocks/userData";
const userDataPromise = new Promise(resolve => {
  resolve(mockedUserData);
});

// const userApiRequest = async () => {
//   const apiData = await userDataPromise;
//   return apiData;
// };

// export default userApiRequest;
export default userDataPromise;
