import { axiosInstance } from '../../axiosInstance';

export const ASSING_DRIVER_PENDING = 'ASSING_DRIVER_PENDING';
export const ASSING_DRIVER_SUCCESS = 'ASSING_DRIVER_SUCCESS';
export const ASSING_DRIVER_FAILURE = 'ASSING_DRIVER_FAILURE';

export const assingDriverToOrder = (driverId, orderId) => {
  return async (dispatch) => {
    dispatch({ type: ASSING_DRIVER_PENDING });
    try {
      const response = await axiosInstance.post(
        '/application/assing',
        { driverId, orderId }
      );
      dispatch({
        type: ASSING_DRIVER_SUCCESS,
        payload: response.data,
      });
    } catch (error) {
      dispatch({
        type: ASSING_DRIVER_FAILURE,
        error: error.message,
      });
    }
  };
};
