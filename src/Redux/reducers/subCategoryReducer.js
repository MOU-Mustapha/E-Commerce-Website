import { CREATE_SUB_CATEGORY, GET_ALL_CATEGORY_SUB_CATEGORY, GET_ERROR } from "../types";

const initialState = {
  subCategory: [],
  loading: true,
};

const subCategoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_SUB_CATEGORY:
      return {
        ...state,
        subCategory: action.payload,
        loading: false,
      };
    case GET_ALL_CATEGORY_SUB_CATEGORY:
      return {
        subCategory: action.payload,
        loading: false,
      };
    case GET_ERROR:
      return {
        subCategory: action.payload,
        loading: true,
      };
    default:
      return state;
  }
};

export default subCategoryReducer;
