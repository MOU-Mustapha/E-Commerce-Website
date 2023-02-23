import {
  CREATE_PRODUCT,
  GET_ERROR,
  GET_ALL_PRODUCT,
  GET_SPECIFIC_PRODUCT,
  DELETE_PRODUCT,
  UPDATE_PRODUCT,
  GET_ALL_PRODUCT_CATEGORY,
  GET_ALL_PRODUCT_BRAND,
} from "../types";
import { usePostDataWithImage } from "../../hooks/usePostData";
import useGetData from "../../hooks/useGetData";
import useDeleteData from "../../hooks/useDeleteData";
import { useUpdateDataWithImage } from "../../hooks/useUpdateData";

export const createProductAction = (formData) => async (dispatch) => {
  try {
    const response = await usePostDataWithImage("/api/v1/products", formData);
    dispatch({
      type: CREATE_PRODUCT,
      payload: response,
    });
  } catch (err) {
    dispatch({
      type: GET_ERROR,
      payload: "Error" + err,
    });
  }
};

export const getAllProductAction = (limit, page) => async (dispatch) => {
  try {
    const response = await useGetData(
      `/api/v1/products?limit=${limit}&page=${page}`
    );
    dispatch({
      type: GET_ALL_PRODUCT,
      payload: response,
    });
  } catch (err) {
    dispatch({
      type: GET_ERROR,
      payload: "Error" + err,
    });
  }
};

export const getSpecificProductAction = (id) => async (dispatch) => {
  try {
    const response = await useGetData(`/api/v1/products/${id}`);
    dispatch({
      type: GET_SPECIFIC_PRODUCT,
      payload: response,
    });
  } catch (err) {
    dispatch({
      type: GET_ERROR,
      payload: "Error" + err,
    });
  }
};

export const deleteProductAction = (id) => async (dispatch) => {
  try {
    const response = await useDeleteData(`/api/v1/products/${id}`);
    dispatch({
      type: DELETE_PRODUCT,
      payload: response,
    });
  } catch (err) {
    dispatch({
      type: GET_ERROR,
      payload: "Error" + err,
    });
  }
};

export const updateProductAction = (id, formData) => async (dispatch) => {
  try {
    const response = await useUpdateDataWithImage(
      `/api/v1/products/${id}`,
      formData
    );
    dispatch({
      type: UPDATE_PRODUCT,
      payload: response,
    });
  } catch (err) {
    dispatch({
      type: GET_ERROR,
      payload: "Error" + err,
    });
  }
};

export const getSearchProductsAction = (queryString) => async (dispatch) => {
  try {
    const response = await useGetData(`/api/v1/products?${queryString}`);
    dispatch({
      type: GET_ALL_PRODUCT,
      payload: response,
    });
  } catch (err) {
    dispatch({
      type: GET_ERROR,
      payload: "Error" + err,
    });
  }
};

export const getAllProductsByCategoryAction =
  (page, limit, id) => async (dispatch) => {
    try {
      const response = await useGetData(
        `/api/v1/products?limit=${limit}&category=${id}&page=${page}`
      );
      dispatch({
        type: GET_ALL_PRODUCT_CATEGORY,
        payload: response,
      });
    } catch (err) {
      dispatch({
        type: GET_ALL_PRODUCT_CATEGORY,
        payload: err.response,
      });
    }
  };

export const getAllProductsByBrandAction =
  (page, limit, id) => async (dispatch) => {
    try {
      const response = await useGetData(
        `/api/v1/products?limit=${limit}&brand=${id}&page=${page}`
      );
      dispatch({
        type: GET_ALL_PRODUCT_BRAND,
        payload: response,
      });
    } catch (err) {
      dispatch({
        type: GET_ALL_PRODUCT_BRAND,
        payload: err.response,
      });
    }
  };
