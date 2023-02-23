import {
  CREATE_SUB_CATEGORY,
  GET_ALL_CATEGORY_SUB_CATEGORY,
  GET_ERROR,
} from "../types";
import { usePostData } from "../../hooks/usePostData";
import useGetData from "../../hooks/useGetData";

export const createSubCategoryAction = (data) => async (dispatch) => {
  try {
    const response = await usePostData("/api/v1/subcategories", data);
    dispatch({
      type: CREATE_SUB_CATEGORY,
      payload: response,
    });
  } catch (err) {
    dispatch({
      type: GET_ERROR,
      payload: "Error" + err,
    });
  }
};

export const getAllCategorySubCategoryAction = (catId) => async (dispatch) => {
  try {
    const response = await useGetData(
      `/api/v1/categories/${catId}/subcategories`
    );
    dispatch({
      type: GET_ALL_CATEGORY_SUB_CATEGORY,
      payload: response,
    });
  } catch (err) {
    dispatch({
      type: GET_ERROR,
      payload: "Error" + err,
    });
  }
};
