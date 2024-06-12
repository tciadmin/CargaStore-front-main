import { axiosInstance } from '../../axiosInstance';

export const ACEPT_ORDER_PENDING = 'ACEPT_ORDER_PENDING';
export const ACEPT_ORDER_SUCCESS = 'ACEPT_ORDER_SUCCESS';
export const ACEPT_ORDER_FAILURE = 'ACEPT_ORDER_FAILURE';

export const aceptOrder = (orderId) => {
  return async (dispatch) => {
    dispatch({ type: ACEPT_ORDER_PENDING });
    try {
      const response = await axiosInstance.patch(
        `/application/acept_order/${orderId}`
      );
      dispatch({
        type: ACEPT_ORDER_SUCCESS,
        payload: response.data,
      });
    } catch (error) {
      dispatch({
        type: ACEPT_ORDER_FAILURE,
        error: error.message,
      });
    }
  };
};
