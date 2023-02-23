import useGetDataToken from "../../hooks/useGetDataToken";
import { usePostData } from "../../hooks/usePostData";
import { useUpdateData } from "../../hooks/useUpdateData";
import {
  CREATE_REVIEW,
  All_REVIEWS_PRODUCT,
  DELETE_REVIEW,
  EDIT_REVIEW,
} from "../../Redux/types";
import useDeleteData from "../../hooks/useDeleteData";

export const createReviewAction = (id, data) => async (dispatch) => {
  try {
    const response = await usePostData(`/api/v1/products/${id}/reviews`, data);
    dispatch({
      type: CREATE_REVIEW,
      payload: response,
    });
  } catch (err) {
    dispatch({
      type: CREATE_REVIEW,
      payload: err.response,
    });
  }
};

export const getAllReviewsProductAction =
  (id, page, limit) => async (dispatch) => {
    try {
      const response = await useGetDataToken(
        `/api/v1/products/${id}/reviews?page=${page}&limit=${limit}`
      );
      dispatch({
        type: All_REVIEWS_PRODUCT,
        payload: response,
      });
    } catch (err) {
      dispatch({
        type: All_REVIEWS_PRODUCT,
        payload: err.response,
      });
    }
  };

export const deleteReviewAction = (id) => async (dispatch) => {
  try {
    const response = await useDeleteData(`/api/v1/reviews/${id}`);
    dispatch({
      type: DELETE_REVIEW,
      payload: response,
    });
  } catch (err) {
    dispatch({
      type: DELETE_REVIEW,
      payload: err.response,
    });
  }
};

export const editReviewAction = (id, data) => async (dispatch) => {
  try {
    const response = await useUpdateData(`/api/v1/reviews/${id}`, data);
    dispatch({
      type: EDIT_REVIEW,
      payload: response,
    });
  } catch (err) {
    dispatch({
      type: EDIT_REVIEW,
      payload: err.response,
    });
  }
};
