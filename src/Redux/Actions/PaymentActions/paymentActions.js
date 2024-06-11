import { axiosInstance } from "../../axiosInstance";
//?------------------------------------------PAYMENT
export const GET_DRIVER_PAY_HISTORY = "GET_DRIVER_PAY_HISTORY";
export const GET_ADMIN_PAY_HISTORY = "GET_ADMIN_PAY_HISTORY";
export const PAYMENT_DETAIL = "PAYMENT_DETAIL";
export const POST_PAYMENT = "POST_PAYMENT";
export const FILTER_PAYMENT = "FILTER_PAYMENT";

export const getDriverPayHistory = (id) => {
  return async (dispatch) => {
    try {
      const payment = await axiosInstance(`/pay/driver_history/${id}`);
      return dispatch({
        type: GET_DRIVER_PAY_HISTORY,
        payload: payment,
      });
    } catch (error) {}
  };
};
