import { axiosInstance } from "../../axiosInstance";
//?------------------------------------------PAYMENT
export const GET_DRIVER_PAY_HISTORY = "GET_DRIVER_PAY_HISTORY";
export const GET_ADMIN_PAY_HISTORY = "GET_ADMIN_PAY_HISTORY";
export const PAYMENT_DETAIL = "PAYMENT_DETAIL";
export const FILTER_PAYMENT = "FILTER_PAYMENT";
export const POST_PAYMENT = "POST_PAYMENT";

export const getDriverPayHistory = (id) => {
  return async (dispatch) => {
    try {
      const payment = await axiosInstance(`/pay/driver_history/${id}`);
      return dispatch({
        type: GET_DRIVER_PAY_HISTORY,
        payload: payment,
      });
    } catch (error) {
      console.log("Se produjo un error al cargar historial");
    }
  };
};

export const getAdminPayHistory = (id) => {
  return async (dispatch) => {
    try {
      const payment = await axiosInstance(`/pay/admin_history/${id}`);
      return dispatch({
        type: GET_ADMIN_PAY_HISTORY,
        payload: payment,
      });
    } catch (error) {
      console.log("Se produjo un error al cargar historial");
    }
  };
};

export const getPayment = (id) => {
  return async (dispatch) => {
    try {
      const payment = await axiosInstance(`/pay/find_pay/${id}`);
      return dispatch({
        type: PAYMENT_DETAIL,
        payload: payment,
      });
    } catch (error) {
      console.log("Se produjo un error al cargar factura");
    }
  };
};

export const filterPayment = (status) => {
  return async (dispatch) => {
    try {
      const payment = await axiosInstance(`/pay/list_pays?status=${status}`);
      return dispatch({
        type: FILTER_PAYMENT,
        payload: payment,
      });
    } catch (error) {
      console.log("Se produjo un error al filtrar los pagos");
    }
  };
};

export const postPayment = (pay) => {
  return async (dispatch) => {
    try {
      const payment = await axiosInstance.post("/pay/pay_driver", pay);
      return dispatch({
        type: POST_PAYMENT,
        payload: payment,
      });
    } catch (error) {
      console.log("Se produjo un error al efectuar pago");
    }
  };
};
