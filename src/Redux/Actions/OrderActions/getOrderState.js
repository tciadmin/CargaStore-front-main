import { axiosInstance } from '../../axiosInstance';

export const ORDER_STATE_PENDING = 'ORDER_STATE_PENDING';
export const ORDER_STATE_SUCCESS = 'ORDER_STATE_SUCCESS';
export const ORDER_STATE_FAILURE = 'ORDER_STATE_FAILURE';

export const getOrderState = (orderId) => {
  return async (dispatch) => {
    dispatch({ type: ORDER_STATE_PENDING });
    try {
      const response = await axiosInstance.get(
        `/order/state/${orderId}`
      );
      dispatch({
        type: ORDER_STATE_SUCCESS,
        payload: response.data,
      });
    } catch (error) {
      dispatch({
        type: ORDER_STATE_FAILURE,
        error: error.message,
      });
    }
  };
};
