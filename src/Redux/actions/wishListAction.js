import {
  ADD_TO_WISHLIST,
  DELETE_FROM_WISHLIST,
  GET_ALL_WISHLIST,
} from "../types";
import { usePostData } from "../../hooks/usePostData";
import useDeleteData from "../../hooks/useDeleteData";
import useGetDataToken from "../../hooks/useGetDataToken";

export const addProductToWishListAction = (data) => async (dispatch) => {
  try {
    const response = await usePostData("/api/v1/wishlist ", data);
    dispatch({
      type: ADD_TO_WISHLIST,
      payload: response,
    });
  } catch (err) {
    dispatch({
      type: ADD_TO_WISHLIST,
      payload: err.response,
    });
  }
};

export const deleteProductFromWishListAction = (id) => async (dispatch) => {
  try {
    const response = await useDeleteData(`/api/v1/wishlist/${id}`);
    dispatch({
      type: DELETE_FROM_WISHLIST,
      payload: response,
    });
  } catch (err) {
    dispatch({
      type: DELETE_FROM_WISHLIST,
      payload: err.response,
    });
  }
};

export const getAllProductsWishListAction = () => async (dispatch) => {
  try {
    const response = await useGetDataToken(`/api/v1/wishlist`);
    dispatch({
      type: GET_ALL_WISHLIST,
      payload: response,
    });
  } catch (err) {
    dispatch({
      type: GET_ALL_WISHLIST,
      payload: err.response,
    });
  }
};
