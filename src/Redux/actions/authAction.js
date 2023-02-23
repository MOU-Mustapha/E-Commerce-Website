import { usePostData } from "../../hooks/usePostData";
import { useUpdateData } from "../../hooks/useUpdateData";
import {
  CREATE_NEW_USER,
  LOGIN_USER,
  FORGET_PASSWORD,
  VERIFY_PASSWORD,
  RESET_PASSWORD,
} from "../../Redux/types";

export const createNewUserAction = (data) => async (dispatch) => {
  try {
    const response = await usePostData("/api/v1/auth/signup", data);
    dispatch({
      type: CREATE_NEW_USER,
      payload: response,
    });
  } catch (err) {
    dispatch({
      type: CREATE_NEW_USER,
      payload: err.response,
    });
  }
};

export const loginUserAction = (data) => async (dispatch) => {
  try {
    const response = await usePostData("/api/v1/auth/login", data);
    dispatch({
      type: LOGIN_USER,
      payload: response,
    });
  } catch (err) {
    dispatch({
      type: LOGIN_USER,
      payload: err.response,
    });
  }
};

export const forgetPasswordAction = (data) => async (dispatch) => {
  try {
    const response = await usePostData("/api/v1/auth/forgotPasswords", data);
    dispatch({
      type: FORGET_PASSWORD,
      payload: response,
    });
  } catch (err) {
    dispatch({
      type: FORGET_PASSWORD,
      payload: err.response,
    });
  }
};

export const verifyPasswordAction = (data) => async (dispatch) => {
  try {
    const response = await usePostData("/api/v1/auth/verifyResetCode", data);
    dispatch({
      type: VERIFY_PASSWORD,
      payload: response,
    });
  } catch (err) {
    dispatch({
      type: VERIFY_PASSWORD,
      payload: err.response,
    });
  }
};

export const resetPasswordAction = (data) => async (dispatch) => {
  try {
    const response = await useUpdateData("/api/v1/auth/resetPassword", data);
    dispatch({
      type: RESET_PASSWORD,
      payload: response,
    });
  } catch (err) {
    dispatch({
      type: RESET_PASSWORD,
      payload: err.response,
    });
  }
};
