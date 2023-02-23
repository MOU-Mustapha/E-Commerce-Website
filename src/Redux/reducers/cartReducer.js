import {
  ADD_PRODUCT_TO_CART,
  GET_ALL_PRODUCT_CART,
  DELETE_ALL_CART,
  DELETE_SPECIFIC_CART_PRODUCT,
  UPDATE_PRODUCT_CART_COUNT,
  APPLY_COUPON,
} from "../../Redux/types";

const initialState = {
  addProductToCart: [],
  getAllProductCart: [],
  deleteAllCart: [],
  specificCartProduct: [],
  updateProductCartCount: [],
  applyCoupon: [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT_TO_CART:
      return {
        ...state,
        addProductToCart: action.payload,
      };
    case GET_ALL_PRODUCT_CART:
      return {
        ...state,
        getAllProductCart: action.payload,
      };
    case DELETE_ALL_CART:
      return {
        ...state,
        deleteAllCart: action.payload,
      };
    case DELETE_SPECIFIC_CART_PRODUCT:
      return {
        ...state,
        specificCartProduct: action.payload,
      };
    case UPDATE_PRODUCT_CART_COUNT:
      return {
        ...state,
        updateProductCartCount: action.payload,
      };
    case APPLY_COUPON:
      return {
        ...state,
        applyCoupon: action.payload,
      };
    default:
      return state;
  }
};

export default cartReducer;
