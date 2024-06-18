import { axiosInstance } from "../../axiosInstance";
//?------------------------------------------PAYMENT
export const GET_DRIVER_PAY_HISTORY_PENDING = "GET_DRIVER_PAY_HISTORY_PENDING";
export const GET_DRIVER_PAY_HISTORY_SUCCESS = "GET_DRIVER_PAY_HISTORY_SUCCESS";
export const GET_DRIVER_PAY_HISTORY_FAILURE = "GET_DRIVER_PAY_HISTORY_FAILURE";

export const GET_ADMIN_PAY_HISTORY_PENDING = "GET_ADMIN_PAY_HISTORY_PENDING";
export const GET_ADMIN_PAY_HISTORY_SUCCESS = "GET_ADMIN_PAY_HISTORY_SUCCESS";
export const GET_ADMIN_PAY_HISTORY_FAILURE = "GET_ADMIN_PAY_HISTORY_FAILURE";

export const PAYMENT_DETAIL_PENDING = "PAYMENT_DETAIL_PENDING";
export const PAYMENT_DETAIL_SUCCESS = "PAYMENT_DETAIL_SUCCESS";
export const PAYMENT_DETAIL_FAILURE = "PAYMENT_DETAIL_FAILURE";

export const FILTER_PAYMENT_PENDING = "FILTER_PAYMENT_PENDING";
export const FILTER_PAYMENT_SUCCESS = "FILTER_PAYMENT_SUCCESS";
export const FILTER_PAYMENT_FAILURE = "FILTER_PAYMENT_FAILURE";

export const POST_PAYMENT_PENDING = "POST_PAYMENT_PENDING";
export const POST_PAYMENT_SUCCESS = "POST_PAYMENT_SUCCESS";
export const POST_PAYMENT_FAILURE = "POST_PAYMENT_FAILURE";

export const getDriverPayHistory = (id) => {
  return async (dispatch) => {
    dispatch({ type: GET_DRIVER_PAY_HISTORY_PENDING });
    try {
      const payment = await axiosInstance(`/pay/driver_history/${id}`);
      return dispatch({
        type: GET_DRIVER_PAY_HISTORY_SUCCESS,
        payload: payment,
      });
    } catch (error) {
      dispatch({
        type: GET_DRIVER_PAY_HISTORY_FAILURE,
        error: error.message,
      });
    }
  };
};

export const getAdminPayHistory = (id) => {
  return async (dispatch) => {
    dispatch({ type: GET_ADMIN_PAY_HISTORY_PENDING });
    try {
      const payment = await axiosInstance(`/pay/admin_history/${id}`);
      return dispatch({
        type: GET_ADMIN_PAY_HISTORY_SUCCESS,
        payload: payment,
      });
    } catch (error) {
      dispatch({
        type: GET_ADMIN_PAY_HISTORY_FAILURE,
        error: error.message,
      });
    }
  };
};

export const getPayment = (id) => {
  return async (dispatch) => {
    dispatch({ type: PAYMENT_DETAIL_PENDING });
    try {
      const payment = await axiosInstance(`/pay/find_pay/${id}`);
      return dispatch({
        type: PAYMENT_DETAIL_SUCCESS,
        payload: payment,
      });
    } catch (error) {
      dispatch({
        type: PAYMENT_DETAIL_FAILURE,
        error: error.message,
      });
    }
  };
};

export const filterPayment = (status) => {
  return async (dispatch) => {
    dispatch({ type: FILTER_PAYMENT_PENDING });
    try {
      const payment = await axiosInstance(`/pay/list_pays?status=${status}`);
      return dispatch({
        type: FILTER_PAYMENT_SUCCESS,
        payload: payment,
      });
    } catch (error) {
      dispatch({
        type: FILTER_PAYMENT_FAILURE,
        error: error.message,
      });
    }
  };
};

export const postPayment = (pay) => {
  return async (dispatch) => {
    dispatch({ type: POST_PAYMENT_PENDING });
    try {
      const payment = await axiosInstance.post("/pay/pay_driver", pay);
      return dispatch({
        type: POST_PAYMENT_SUCCESS,
        payload: payment,
      });
    } catch (error) {
      dispatch({
        type: POST_PAYMENT_FAILURE,
        error: error.message,
      });
    }
  };
};
