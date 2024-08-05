import { axiosInstance } from '../../axiosInstance';

export const VALIDATE_DRIVER_PENDING = 'VALIDATE_DRIVER_PENDING';
export const VALIDATE_DRIVER_SUCCESS = 'VALIDATE_DRIVER_SUCCESS';
export const VALIDATE_DRIVER_FAILURE = 'VALIDATE_DRIVER_FAILURE';

export const validateDriver = (driverId) => {
  return async (dispatch) => {
    dispatch({ type: VALIDATE_DRIVER_PENDING });
    try {
      const response = await axiosInstance.patch(
        `/driver/change_validate_status/${driverId}`
      );
      return dispatch({
        type: VALIDATE_DRIVER_SUCCESS,
        payload: response.data,
      });
    } catch (error) {
      dispatch({
        type: VALIDATE_DRIVER_FAILURE,
        error: error.message,
      });
    }
  };
};
