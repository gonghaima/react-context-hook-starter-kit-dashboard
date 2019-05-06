import { userReducers, userState } from "./user";
import { displayReducers, displayState } from "./display";

export const initialState = { ...userState, ...displayState };

export default {
  ...userReducers,
  ...displayReducers
};
