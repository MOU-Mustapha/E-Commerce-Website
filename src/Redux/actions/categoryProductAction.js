import { GET_ERROR, GET_CATEGORY_PRODUCTS } from "../types";
import useGetData from "../../hooks/useGetData";

export const getCategoryProductsAction = (id) => async (dispatch) => {
  try {
    const response = await useGetData(`/api/v1/products?category=${id}`);
    dispatch({
      type: GET_CATEGORY_PRODUCTS,
      payload: response,
    });
  } catch (err) {
    dispatch({
      type: GET_ERROR,
      payload: "Error" + err,
    });
  }
};
