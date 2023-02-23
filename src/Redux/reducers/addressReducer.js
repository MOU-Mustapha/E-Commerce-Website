import {
  ADD_ADDRESS,
  GET_ALL_ADDRESSES,
  DELETE_ADDRESS,
  GET_SPECIFIC_ADDRESS,
  EDIT_ADDRESS,
} from "../../Redux/types";

const initialState = {
  addAddress: [],
  allAddresses: [],
  deleteAddress: [],
  specificAddress: [],
  editAddress: [],
};

const addressReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ADDRESS:
      return {
        ...state,
        addAddress: action.payload,
      };
    case GET_ALL_ADDRESSES:
      return {
        ...state,
        allAddresses: action.payload,
      };
    case DELETE_ADDRESS:
      return {
        ...state,
        deleteAddress: action.payload,
      };
    case GET_SPECIFIC_ADDRESS:
      return {
        ...state,
        specificAddress: action.payload,
      };
    case EDIT_ADDRESS:
      return {
        ...state,
        editAddress: action.payload,
      };
    default:
      return state;
  }
};

export default addressReducer;
