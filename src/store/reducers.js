import { combineReducers } from "redux";
import { userReducer } from "./user/reducer";

export const reducers = combineReducers({
  userData: userReducer
});
