import { axiosInstance } from '../../axiosInstance';

export const DECLINE_ORDER_PENDING = 'DECLINE_ORDER_PENDING';
export const DECLINE_ORDER_SUCCESS = 'DECLINE_ORDER_SUCCESS';
export const DECLINE_ORDER_FAILURE = 'DECLINE_ORDER_FAILURE';

export const declineOrder = (orderId) => {
  return async (dispatch) => {
    dispatch({ type: DECLINE_ORDER_PENDING });
    try {
      const response = await axiosInstance.patch(
        `/application/decline_order/${orderId}`
      );
      dispatch({
        type: DECLINE_ORDER_SUCCESS,
        payload: response.data,
      });
    } catch (error) {
      dispatch({
        type: DECLINE_ORDER_FAILURE,
        error: error.message,
      });
    }
  };
};
