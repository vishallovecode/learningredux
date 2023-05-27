import { LOGIN_FAILED, LOGIN_INITIATE, LOGIN_SUCCESS } from "./action";

export const initialState = {
  isLoggedIn: false,
  loginLoader: false,
  userInfo: {},
  successMessage: "",
  errorMessage: "",
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
        successMessage: "SuccessFully Logged in",
        userInfo: action.payload,
      };
    case LOGIN_FAILED:
      return {
        ...state,
        isLoggedIn: false,
        loginLoader: false,
        successMessage: "Failed to login Please try again!!",
      };
    default:
      return {
        ...state,
      };
  }
};
