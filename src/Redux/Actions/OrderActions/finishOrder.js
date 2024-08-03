import { axiosInstance } from '../../axiosInstance';

export const FINISH_ORDER_PENDING = 'FINISH_ORDER_PENDING';
export const FINISH_ORDER_SUCCESS = 'FINISH_ORDER_SUCCESS';
export const FINISH_ORDER_FAILURE = 'FINISH_ORDER_FAILURE';

export const finishOrder = (orderId, driverId) => {
  return async (dispatch) => {
    dispatch({ type: FINISH_ORDER_PENDING });
    try {
      const response = await axiosInstance.patch(
        `/order/finish/${orderId}/${driverId}`
      );
      dispatch({
        type: FINISH_ORDER_SUCCESS,
        payload: response.data,
      });
    } catch (error) {
      dispatch({
        type: FINISH_ORDER_FAILURE,
        error: error.message,
      });
    }
  };
};
