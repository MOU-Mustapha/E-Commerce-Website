import { CREATE_CASH_ORDER, CREATE_CARD_ORDER } from "../../Redux/types";

const initialState = {
  createCashOrder: [],
  createCardOrder: [],
};

const paymentReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_CASH_ORDER:
      return {
        ...state,
        createCashOrder: action.payload,
      };
    case CREATE_CARD_ORDER:
      return {
        ...state,
        createCardOrder: action.payload,
      };
    default:
      return state;
  }
};

export default paymentReducer;
