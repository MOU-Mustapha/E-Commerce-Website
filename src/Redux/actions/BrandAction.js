import { CREATE_BRAND, GET_ALL_BRAND, GET_ERROR, GET_SPECIFIC_BRAND } from "../types";
import useGetData from "../../hooks/useGetData";
import { usePostDataWithImage } from "../../hooks/usePostData";

export const getAllBrandAction = (limit, page) => async (dispatch) => {
  try {
    const response = await useGetData(
      `/api/v1/brands?limit=${limit}&page=${page}`
    );
    dispatch({
      type: GET_ALL_BRAND,
      payload: response,
    });
  } catch (err) {
    dispatch({
      type: GET_ERROR,
      payload: "Error" + err,
    });
  }
};

export const createBrandAction = (formData) => async (dispatch) => {
  try {
    const response = await usePostDataWithImage(`/api/v1/brands`, formData);
    dispatch({
      type: CREATE_BRAND,
      payload: response,
    });
  } catch (err) {
    dispatch({
      type: GET_ERROR,
      payload: "Error" + err,
    });
  }
};

export const getSpecificBrandAction = (id) => async (dispatch) => {
  try {
    const response = await useGetData(`/api/v1/brands/${id}`);
    dispatch({
      type: GET_SPECIFIC_BRAND,
      payload: response,
    });
  } catch (err) {
    dispatch({
      type: GET_ERROR,
      payload: "Error" + err,
    });
  }
};
