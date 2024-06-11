import { axiosInstance } from '../../axiosInstance';

export const CHANGE_ORDER_STATE_PENDING =
  'CHANGE_ORDER_STATE_PENDING';
export const CHANGE_ORDER_STATE_SUCCESS =
  'CHANGE_ORDER_STATE_SUCCESS';
export const CHANGE_ORDER_STATE_FAILURE =
  'CHANGE_ORDER_STATE_FAILURE';

export const changeOrderState = (orderId) => {
  return async (dispatch) => {
    dispatch({ type: CHANGE_ORDER_STATE_PENDING });
    try {
      const response = await axiosInstance.patch(
        `/order/change_state/${orderId}`
      );
      dispatch({
        type: CHANGE_ORDER_STATE_SUCCESS,
        payload: response.data,
      });
    } catch (error) {
      dispatch({
        type: CHANGE_ORDER_STATE_FAILURE,
        error: error.message,
      });
    }
  };
};
