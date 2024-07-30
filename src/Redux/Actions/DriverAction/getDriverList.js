import { axiosInstance } from '../../axiosInstance';

export const GET_DRIVER_LIST_PENDING = 'GET_DRIVER_LIST_PENDING';
export const GET_DRIVER_LIST_SUCCESS = 'GET_DRIVER_LIST_SUCCESS';
export const GET_DRIVER_LIST_FAILURE = 'GET_DRIVER_LIST_FAILURE';

export const getDriverList = () => {
  return async (dispatch) => {
    dispatch({ type: GET_DRIVER_LIST_PENDING });
    try {
      const response = await axiosInstance.get('/driver/list');
      return dispatch({
        type: GET_DRIVER_LIST_SUCCESS,
        payload: response.data,
      });
    } catch (error) {
      dispatch({
        type: GET_DRIVER_LIST_FAILURE,
        error: error.message,
      });
    }
  };
};
