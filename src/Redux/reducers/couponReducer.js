import {
  CREATE_COUPON,
  GET_ALL_COUPONS,
  DELETE_COUPON,
  GET_SPECIFIC_COUPON,
  EDIT_SPECIFIC_COUPON,
} from "../../Redux/types";

const initialState = {
  createCoupon: [],
  allCoupons: [],
  deleteCoupon: [],
  editCoupon: [],
};

const couponReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_COUPON:
      return {
        ...state,
        createCoupon: action.payload,
      };
    case GET_ALL_COUPONS:
      return {
        ...state,
        allCoupons: action.payload,
      };
    case DELETE_COUPON:
      return {
        ...state,
        deleteCoupon: action.payload,
      };
    case GET_SPECIFIC_COUPON:
      return {
        ...state,
        specificCoupon: action.payload,
      };
    case EDIT_SPECIFIC_COUPON:
      return {
        ...state,
        editCoupon: action.payload,
      };
    default:
      return state;
  }
};

export default couponReducer;
