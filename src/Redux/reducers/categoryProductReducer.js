import { GET_ERROR, GET_CATEGORY_PRODUCTS } from "../types";

const initialState = {
  catProduct: [],
  loading: true,
};

const categoryProductReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CATEGORY_PRODUCTS:
      return {
        ...state,
        catProduct: action.payload,
        loading: false,
      };
    case GET_ERROR:
      return {
        catProduct: action.payload,
        loading: true,
      };
    default:
      return state;
  }
};

export default categoryProductReducer;
