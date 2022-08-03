import { APP_TYPE, USER_DATA } from "./type";

export const setUser = (value) => {
  return { type: USER_DATA, value: value };
};

export const setAppType = (value) => {
  return { type: APP_TYPE, value: value };
};
