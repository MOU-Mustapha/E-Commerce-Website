import {
  CREATE_COUPON,
  GET_ALL_COUPONS,
  DELETE_COUPON,
  GET_SPECIFIC_COUPON,
  EDIT_SPECIFIC_COUPON,
} from "../../Redux/types";
import { usePostData } from "../../hooks/usePostData";
import useGetDataToken from "../../hooks/useGetDataToken";
import useDeleteData from "../../hooks/useDeleteData";
import { useUpdateData } from "../../hooks/useUpdateData";

export const createCouponAction = (data) => async (dispatch) => {
  try {
    const response = await usePostData("/api/v1/coupons", data);
    dispatch({
      type: CREATE_COUPON,
      payload: response,
    });
  } catch (err) {
    dispatch({
      type: CREATE_COUPON,
      payload: err.response,
    });
  }
};

export const getAllCouponsAction = () => async (dispatch) => {
  try {
    const response = await useGetDataToken("/api/v1/coupons");
    dispatch({
      type: GET_ALL_COUPONS,
      payload: response,
    });
  } catch (err) {
    dispatch({
      type: GET_ALL_COUPONS,
      payload: err.response,
    });
  }
};

export const deleteCouponAction = (id) => async (dispatch) => {
  try {
    const response = await useDeleteData(`/api/v1/coupons/${id}`);
    dispatch({
      type: DELETE_COUPON,
      payload: response,
    });
  } catch (err) {
    dispatch({
      type: DELETE_COUPON,
      payload: err.response,
    });
  }
};

export const getSpecificCouponAction = (id) => async (dispatch) => {
  try {
    const response = await useGetDataToken(`/api/v1/coupons/${id}`);
    dispatch({
      type: GET_SPECIFIC_COUPON,
      payload: response,
    });
  } catch (err) {
    dispatch({
      type: GET_SPECIFIC_COUPON,
      payload: err.response,
    });
  }
};

export const editSpecificCouponAction = (id, data) => async (dispatch) => {
  try {
    const response = await useUpdateData(`/api/v1/coupons/${id}`, data);
    dispatch({
      type: EDIT_SPECIFIC_COUPON,
      payload: response,
    });
  } catch (err) {
    dispatch({
      type: EDIT_SPECIFIC_COUPON,
      payload: err.response,
    });
  }
};
