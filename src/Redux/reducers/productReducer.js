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

const initialState = {
  product: [],
  updatedProduct: [],
  productsByCategory: [],
  productsByBrand: [],
  loading: true,
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_PRODUCT:
      return {
        product: action.payload,
        loading: false,
      };
    case GET_ALL_PRODUCT:
      return {
        ...state,
        product: action.payload,
        loading: false,
      };
    case GET_SPECIFIC_PRODUCT:
      return {
        product: action.payload,
        loading: false,
      };
    case DELETE_PRODUCT:
      return {
        product: action.payload,
        loading: false,
      };
    case UPDATE_PRODUCT:
      return {
        ...state,
        updatedProduct: action.payload,
        loading: false,
      };
    case GET_ERROR:
      return {
        product: action.payload,
        loading: true,
      };
    case GET_ALL_PRODUCT_CATEGORY:
      return {
        productsByCategory: action.payload,
        loading: true,
      };
    case GET_ALL_PRODUCT_BRAND:
      return {
        productsByBrand: action.payload,
        loading: true,
      };
    default:
      return state;
  }
};

export default productReducer;
