import {
  CREATE_CATEGORY,
  GET_ALL_CATEGORY,
  GET_ERROR,
  GET_SPECIFIC_CATEGORY,
} from "../types";
import useGetData from "../../hooks/useGetData";
import { usePostDataWithImage } from "../../hooks/usePostData";

export const getAllCategoryAction = (limit, page) => async (dispatch) => {
  try {
    const response = await useGetData(
      `/api/v1/categories?limit=${limit}&page=${page}`
    );
    dispatch({
      type: GET_ALL_CATEGORY,
      payload: response,
    });
  } catch (err) {
    dispatch({
      type: GET_ERROR,
      payload: "Error" + err,
    });
  }
};

export const createCategoryAction = (formData) => async (dispatch) => {
  try {
    const response = await usePostDataWithImage("/api/v1/categories", formData);
    dispatch({
      type: CREATE_CATEGORY,
      payload: response,
    });
  } catch (err) {
    dispatch({
      type: GET_ERROR,
      payload: "Error" + err,
    });
  }
};

export const getSpecificCategoryAction = (id) => async (dispatch) => {
  try {
    const response = await useGetData(`/api/v1/categories/${id}`);
    dispatch({
      type: GET_SPECIFIC_CATEGORY,
      payload: response,
    });
  } catch (err) {
    dispatch({
      type: GET_ERROR,
      payload: "Error" + err,
    });
  }
};
