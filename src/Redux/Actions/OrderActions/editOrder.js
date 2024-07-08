import { axiosInstance } from "../../axiosInstance";

export const EDIT_ORDER_PENDING = "EDIT_ORDER_PENDING";
export const EDIT_ORDER_SUCCESS = "EDIT_ORDER_SUCCESS";
export const EDIT_ORDER_FAILURE = "EDIT_ORDER_FAILURE";

export const editOrder = (
  orderId,
  {
    orderType = "",
    receiving_company = "",
    contact_number = "",
    receiving_company_RUC = "",
    pick_up_date = "",
    pick_up_time = "",
    pick_up_address = "",
    pick_up_city = "",
    delivery_date = "",
    delivery_time = "",
    delivery_address = "",
    delivery_city = "",
  } = {}
) => {
  return async (dispatch) => {
    dispatch({ type: EDIT_ORDER_PENDING });
    try {
      const response = await axiosInstance.put(`/order/edit/${orderId}`, {
        orderType,
        receiving_company,
        contact_number,
        receiving_company_RUC,
        pick_up_date,
        pick_up_time,
        pick_up_address,
        pick_up_city,
        delivery_date,
        delivery_time,
        delivery_address,
        delivery_city,
      });
      dispatch({
        type: EDIT_ORDER_SUCCESS,
        payload: response.data,
      });
    } catch (error) {
      dispatch({ type: EDIT_ORDER_FAILURE, error: error.message });
    }
  };
};
