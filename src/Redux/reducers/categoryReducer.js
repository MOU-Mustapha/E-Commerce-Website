import { GET_ALL_CATEGORY, GET_ERROR, CREATE_CATEGORY, GET_SPECIFIC_CATEGORY } from "../types";

const initialState = {
  category: [],
  loading: true,
};
const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_CATEGORY:
      return {
        ...state,
        category: action.payload,
        loading: false,
      };
    case CREATE_CATEGORY:
      return {
        category: action.payload,
        loading: false,
      };
    case GET_SPECIFIC_CATEGORY:
      return {
        category: action.payload,
        loading: false,
      };
    case GET_ERROR:
      return {
        category: action.payload,
        loading: true,
      };
    default:
      return state;
  }
};

export default categoryReducer;
