import {
  ADD_TO_WISHLIST,
  DELETE_FROM_WISHLIST,
  GET_ALL_WISHLIST,
} from "../types";

const initialState = {
  addToWishlist: [],
  deleteFromWishList: [],
  allWishList: [],
};

const wishListReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_WISHLIST:
      return {
        ...state,
        addToWishlist: action.payload,
      };
    case DELETE_FROM_WISHLIST:
      return {
        ...state,
        deleteFromWishList: action.payload,
      };
    case GET_ALL_WISHLIST:
      return {
        ...state,
        allWishList: action.payload,
      };
    default:
      return state;
  }
};
export default wishListReducer;
