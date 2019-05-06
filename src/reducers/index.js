import { userReducers, userState } from "./user";
import { displayState } from "./display";

export const initialState = { ...userState, ...displayState };

export default {
  ...userReducers
};
