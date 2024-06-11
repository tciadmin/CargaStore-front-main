import { axiosInstance } from '../../axiosInstance';

export const DUPLICATE_ORDER_PENDING = 'DUPLICATE_ORDER_PENDING';
export const DUPLICATE_ORDER_SUCCESS = 'DUPLICATE_ORDER_SUCCESS';
export const DUPLICATE_ORDER_FAILURE = 'DUPLICATE_ORDER_FAILURE';

export const duplicateOrder = (orderId) => {
  return async (dispatch) => {
    dispatch({ type: DUPLICATE_ORDER_PENDING });
    try {
      const response = await axiosInstance.post(
        `/order/duplicate/${orderId}`
      );
      dispatch({
        type: DUPLICATE_ORDER_SUCCESS,
        payload: response.data,
      });
    } catch (error) {
      dispatch({
        type: DUPLICATE_ORDER_FAILURE,
        error: error.message,
      });
    }
  };
};
