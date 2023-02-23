import {
  CREATE_NEW_USER,
  LOGIN_USER,
  FORGET_PASSWORD,
  VERIFY_PASSWORD,
  RESET_PASSWORD,
} from "../../Redux/types";

const initialState = {
  createUser: [],
  loginUser: [],
  forgetPassword: [],
  verifyPassword: [],
  resetPassword: [],
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_NEW_USER:
      return {
        ...state,
        createUser: action.payload,
      };
    case LOGIN_USER:
      return {
        ...state,
        loginUser: action.payload,
      };
    case FORGET_PASSWORD:
      return {
        ...state,
        forgetPassword: action.payload,
      };
    case VERIFY_PASSWORD:
      return {
        ...state,
        verifyPassword: action.payload,
      };
    case RESET_PASSWORD:
      return {
        ...state,
        resetPassword: action.payload,
      };
    default:
      return state;
  }
};

export default authReducer;
