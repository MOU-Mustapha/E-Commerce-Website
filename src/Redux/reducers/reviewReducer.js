import {
  CREATE_REVIEW,
  All_REVIEWS_PRODUCT,
  DELETE_REVIEW,
  EDIT_REVIEW,
} from "../../Redux/types";

const initialState = {
  createReview: [],
  allReviewProduct: [],
  deleteReview: [],
  editReview: [],
  specificCoupon: [],
};

const reviewReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_REVIEW:
      return {
        ...state,
        createReview: action.payload,
      };
    case All_REVIEWS_PRODUCT:
      return {
        ...state,
        allReviewProduct: action.payload,
      };
    case DELETE_REVIEW:
      return {
        ...state,
        deleteReview: action.payload,
      };
    case EDIT_REVIEW:
      return {
        ...state,
        editReview: action.payload,
      };
    default:
      return state;
  }
};

export default reviewReducer;
