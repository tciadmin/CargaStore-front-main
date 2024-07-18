import { axiosInstance } from '../../axiosInstance';

export const GET_DRIVER_PENDING = 'GET_DRIVER_PENDING';
export const GET_DRIVER_SUCCESS = 'GET_DRIVER_SUCCESS';
export const GET_DRIVER_FAILURE = 'GET_DRIVER_FAILURE';

export const driverDetail = (userId) => {
  return async (dispatch) => {
    dispatch({ type: GET_DRIVER_PENDING });
    try {
      const response = await axiosInstance.get(
        `/driver/get/${userId}`
      );
      return dispatch({
        type: GET_DRIVER_SUCCESS,
        payload: response.data,
      });
    } catch (error) {
      dispatch({ type: GET_DRIVER_FAILURE, error: error.message });
    }
  };
};
