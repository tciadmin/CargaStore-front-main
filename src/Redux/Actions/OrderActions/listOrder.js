import { axiosInstance } from '../../axiosInstance';

export const LIST_ORDER_PENDING = 'LIST_ORDER_PENDING';
export const LIST_ORDER_SUCCESS = 'LIST_ORDER_SUCCESS';
export const LIST_ORDER_FAILURE = 'LIST_ORDER_FAILURE';

export const listOrder = (status, orderType, customerId) => {
  return async (dispatch) => {
    dispatch({ type: LIST_ORDER_PENDING });
    try {
      const response = await axiosInstance.get(
        `/order/list_order?status=${status}&orderType=${orderType}&customerId=${customerId}`
      );
      dispatch({ type: LIST_ORDER_SUCCESS, payload: response.data });
    } catch (error) {
      dispatch({ type: LIST_ORDER_FAILURE, error: error.message });
    }
  };
};
