import { CREATE_CASH_ORDER, CREATE_CARD_ORDER } from "../../Redux/types";
import { usePostData } from "../../hooks/usePostData";
import useGetDataToken from "../../hooks/useGetDataToken";

export const createCashOrderAction = (id, data) => async (dispatch) => {
  try {
    const response = await usePostData(`/api/v1/orders/${id}`, data);
    dispatch({
      type: CREATE_CASH_ORDER,
      payload: response,
    });
  } catch (err) {
    dispatch({
      type: CREATE_CASH_ORDER,
      payload: err.response,
    });
  }
};

export const createCardOrderAction = (id, data) => async (dispatch) => {
  try {
    const response = await useGetDataToken(`/api/v1/orders/checkout-session/${id}`, data);
    dispatch({
      type: CREATE_CARD_ORDER,
      payload: response,
    });
  } catch (err) {
    dispatch({
      type: CREATE_CARD_ORDER,
      payload: err.response,
    });
  }
};
