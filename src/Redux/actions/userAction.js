import {
  UPDATE_USER_DATA,
  UPDATE_USER_PASSWORD,
  GET_ALL_ORDERS,
  GET_SPECIFIC_ORDER,
  CHANGE_ORDER_PAID,
  CHANGE_ORDER_DELIVER,
} from "../../Redux/types";
import { useUpdateData } from "../../hooks/useUpdateData";
import useGetDataToken from "../../hooks/useGetDataToken";

export const updateUserDataAction = (data) => async (dispatch) => {
  try {
    const response = await useUpdateData("/api/v1/users/updateMe", data);
    dispatch({
      type: UPDATE_USER_DATA,
      payload: response,
    });
  } catch (err) {
    dispatch({
      type: UPDATE_USER_DATA,
      payload: err.response,
    });
  }
};

export const updateUserPasswordAction = (data) => async (dispatch) => {
  try {
    const response = await useUpdateData(
      "/api/v1/users/changeMyPassword",
      data
    );
    dispatch({
      type: UPDATE_USER_PASSWORD,
      payload: response,
    });
  } catch (err) {
    dispatch({
      type: UPDATE_USER_PASSWORD,
      payload: err.response,
    });
  }
};

export const getAllOrdersAction = (page, limit) => async (dispatch) => {
  try {
    const response = await useGetDataToken(
      `/api/v1/orders?limit=${limit}&page=${page}`
    );
    dispatch({
      type: GET_ALL_ORDERS,
      payload: response,
    });
  } catch (err) {
    dispatch({
      type: GET_ALL_ORDERS,
      payload: err.response,
    });
  }
};

export const getSpecificOrderAction = (id) => async (dispatch) => {
  try {
    const response = await useGetDataToken(`/api/v1/orders/${id}`);
    dispatch({
      type: GET_SPECIFIC_ORDER,
      payload: response,
    });
  } catch (err) {
    dispatch({
      type: GET_SPECIFIC_ORDER,
      payload: err.response,
    });
  }
};

export const changeOrderPaidAction = (id) => async (dispatch) => {
  try {
    const response = await useUpdateData(`/api/v1/orders/${id}/pay`);
    dispatch({
      type: CHANGE_ORDER_PAID,
      payload: response,
    });
  } catch (err) {
    dispatch({
      type: CHANGE_ORDER_PAID,
      payload: err.response,
    });
  }
};

export const changeOrderDeliverAction = (id) => async (dispatch) => {
  try {
    const response = await useUpdateData(`/api/v1/orders/${id}/deliver`);
    dispatch({
      type: CHANGE_ORDER_DELIVER,
      payload: response,
    });
  } catch (err) {
    dispatch({
      type: CHANGE_ORDER_DELIVER,
      payload: err.response,
    });
  }
};
