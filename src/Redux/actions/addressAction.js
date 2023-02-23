import {
  ADD_ADDRESS,
  GET_ALL_ADDRESSES,
  DELETE_ADDRESS,
  GET_SPECIFIC_ADDRESS,
  EDIT_ADDRESS,
} from "../../Redux/types";
import { usePostData } from "../../hooks/usePostData";
import useGetDataToken from "../../hooks/useGetDataToken";
import useDeleteData from "../../hooks/useDeleteData";
import { useUpdateData } from "../../hooks/useUpdateData";

export const addAddressAction = (data) => async (dispatch) => {
  try {
    const response = await usePostData("/api/v1/addresses", data);
    dispatch({
      type: ADD_ADDRESS,
      payload: response,
    });
  } catch (err) {
    dispatch({
      type: ADD_ADDRESS,
      payload: err.response,
    });
  }
};

export const getAllAddressesAction = () => async (dispatch) => {
  try {
    const response = await useGetDataToken("/api/v1/addresses");
    dispatch({
      type: GET_ALL_ADDRESSES,
      payload: response,
    });
  } catch (err) {
    dispatch({
      type: GET_ALL_ADDRESSES,
      payload: err.response,
    });
  }
};

export const deleteAddressAction = (id) => async (dispatch) => {
  try {
    const response = await useDeleteData(`/api/v1/addresses/${id}`);
    dispatch({
      type: DELETE_ADDRESS,
      payload: response,
    });
  } catch (err) {
    dispatch({
      type: DELETE_ADDRESS,
      payload: err.response,
    });
  }
};

export const getSpecificAddressAction = (id) => async (dispatch) => {
  try {
    const response = await useGetDataToken(`/api/v1/addresses/${id}`);
    dispatch({
      type: GET_SPECIFIC_ADDRESS,
      payload: response,
    });
  } catch (err) {
    dispatch({
      type: GET_SPECIFIC_ADDRESS,
      payload: err.response,
    });
  }
};

export const editAddressAction = (id, data) => async (dispatch) => {
  try {
    const response = await useUpdateData(`/api/v1/addresses/${id}`, data);
    dispatch({
      type: EDIT_ADDRESS,
      payload: response,
    });
  } catch (err) {
    dispatch({
      type: EDIT_ADDRESS,
      payload: err.response,
    });
  }
};
