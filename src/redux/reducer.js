import { LOGIN_FAILED, LOGIN_INITIATE, LOGIN_SUCCESS } from "./action";

export const initialState = {
  isLoggedIn: false,
  loginLoader: false,
  userInfo: {},
  message: "",
};
export const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_INITIATE:
      return {
        ...state,
        isLoggedIn: false,
        loginLoader: true,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        loginLoader: false,
        message: "SuccessFully Logged in!!!! relax",
        userInfo: action.payload,
      };
    case LOGIN_FAILED:
      return {
        ...state,
        isLoggedIn: false,
        loginLoader: false,
        message: "Failed to login Please try again later and keep calm",
      };
    default:
      return {
        ...state,
      };
  }
};
