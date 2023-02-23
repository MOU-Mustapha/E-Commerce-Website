import {
  ADD_PRODUCT_TO_CART,
  GET_ALL_PRODUCT_CART,
  DELETE_ALL_CART,
  DELETE_SPECIFIC_CART_PRODUCT,
  UPDATE_PRODUCT_CART_COUNT,
  APPLY_COUPON,
} from "../../Redux/types";
import { usePostData } from "../../hooks/usePostData";
import useGetDataToken from "../../hooks/useGetDataToken";
import useDeleteData from "../../hooks/useDeleteData";
import { useUpdateData } from "../../hooks/useUpdateData";

export const addProductToCartAction = (data) => async (dispatch) => {
  try {
    const response = await usePostData("/api/v1/cart", data);
    dispatch({
      type: ADD_PRODUCT_TO_CART,
      payload: response,
    });
  } catch (err) {
    dispatch({
      type: ADD_PRODUCT_TO_CART,
      payload: err.response,
    });
  }
};

export const getAllProductCartAction = () => async (dispatch) => {
  try {
    const response = await useGetDataToken("/api/v1/cart");
    dispatch({
      type: GET_ALL_PRODUCT_CART,
      payload: response,
    });
  } catch (err) {
    dispatch({
      type: GET_ALL_PRODUCT_CART,
      payload: err.response,
    });
  }
};

export const deleteAllCartAction = () => async (dispatch) => {
  try {
    const response = await useDeleteData("/api/v1/cart");
    dispatch({
      type: DELETE_ALL_CART,
      payload: response,
    });
  } catch (err) {
    dispatch({
      type: DELETE_ALL_CART,
      payload: err.response,
    });
  }
};

export const deleteSpecificCartProductAction = (id) => async (dispatch) => {
  try {
    const response = await useDeleteData(`/api/v1/cart/${id}`);
    dispatch({
      type: DELETE_SPECIFIC_CART_PRODUCT,
      payload: response,
    });
  } catch (err) {
    dispatch({
      type: DELETE_SPECIFIC_CART_PRODUCT,
      payload: err.response,
    });
  }
};

export const updateProductCartCountAction = (id, data) => async (dispatch) => {
  try {
    const response = await useUpdateData(`/api/v1/cart/${id}`, data);
    dispatch({
      type: UPDATE_PRODUCT_CART_COUNT,
      payload: response,
    });
  } catch (err) {
    dispatch({
      type: UPDATE_PRODUCT_CART_COUNT,
      payload: err.response,
    });
  }
};

export const applyCouponAction = (data) => async (dispatch) => {
  try {
    const response = await useUpdateData(`/api/v1/cart/applyCoupon`, data);
    dispatch({
      type: APPLY_COUPON,
      payload: response,
    });
  } catch (err) {
    dispatch({
      type: APPLY_COUPON,
      payload: err.response,
    });
  }
};
