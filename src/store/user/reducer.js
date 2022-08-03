import { userState } from "./state";
import { APP_TYPE, USER_DATA } from "./type";

export const userReducer = (state = userState, action) => {
  switch (action.type) {
    case USER_DATA:
      state.userData = action.value;
      break;
    case APP_TYPE:
      state.type = action.value;
      break;
    default:
      break;
  }
  return { ...state };
};
