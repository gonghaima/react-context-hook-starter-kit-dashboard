import { userReducers, userState } from "./user";

export const initialState = { ...userState };

export default {
  ...userReducers
};
