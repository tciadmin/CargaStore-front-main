import { axiosInstance } from '../../axiosInstance';

export const ASSING_DRIVER_PENDING = 'ASSING_DRIVER_PENDING';
export const ASSING_DRIVER_SUCCESS = 'ASSING_DRIVER_SUCCESS';
export const ASSING_DRIVER_FAILURE = 'ASSING_DRIVER_FAILURE';

export const assingDriverToOrder = (driverId, orderId) => {
  return async (dispatch) => {
    console.log('assignDriver ejecutado');
    console.table({ driverId, orderId });
    dispatch({ type: ASSING_DRIVER_PENDING });
    try {
      const response = await axiosInstance.post(
        '/application/assign',
        { driverId, orderId }
      );
      console.log('data: ', response.data);
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
