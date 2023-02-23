import {
  UPDATE_USER_DATA,
  UPDATE_USER_PASSWORD,
  GET_ALL_ORDERS,
  GET_SPECIFIC_ORDER,
  CHANGE_ORDER_PAID,
  CHANGE_ORDER_DELIVER,
} from "../../Redux/types";

const initialState = {
  updateUserData: [],
  updateUserPassword: [],
  allOrders: [],
  specificOrder: [],
  orderPaid: [],
  orderDeliver: [],
};

const addressReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_USER_DATA:
      return {
        ...state,
        updateUserData: action.payload,
      };
    case UPDATE_USER_PASSWORD:
      return {
        ...state,
        updateUserPassword: action.payload,
      };
    case GET_ALL_ORDERS:
      return {
        ...state,
        allOrders: action.payload,
      };
    case GET_SPECIFIC_ORDER:
      return {
        ...state,
        specificOrder: action.payload,
      };
    case CHANGE_ORDER_PAID:
      return {
        ...state,
        orderPaid: action.payload,
      };
    case CHANGE_ORDER_DELIVER:
      return {
        ...state,
        orderDeliver: action.payload,
      };
    default:
      return state;
  }
};

export default addressReducer;
