import { axiosInstance } from '../../axiosInstance';

export const APPLY_FOR_ORDER_PENDING = 'APPLY_FOR_ORDER_PENDING';
export const APPLY_FOR_ORDER_SUCCESS = 'APPLY_FOR_ORDER_SUCCESS';
export const APPLY_FOR_ORDER_FAILURE = 'APPLY_FOR_ORDER_FAILURE';

export const applicForOrder = (driverId, orderId) => {
  return async (dispatch) => {
    dispatch({ type: APPLY_FOR_ORDER_PENDING });
    try {
      const response = await axiosInstance.post(
        '/application/apply',
        { driverId, orderId }
      );
      dispatch({
        type: APPLY_FOR_ORDER_SUCCESS,
        payload: response.data,
      });
    } catch (error) {
      console.error(error);
      dispatch({
        type: APPLY_FOR_ORDER_FAILURE,
        payload: error.response.data,
      });
    }
  };
};
