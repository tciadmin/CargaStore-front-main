import { axiosInstance } from '../../axiosInstance';

export const ORDER_DETAIL_PENDING = 'ORDER_DETAIL_PENDING';
export const ORDER_DETAIL_SUCCESS = 'ORDER_DETAIL_SUCCESS';
export const ORDER_DETAIL_FAILURE = 'ORDER_DETAIL_FAILURE';

export const orderDetail = (orderId) => {
  return async (dispatch) => {
    dispatch({ type: ORDER_DETAIL_PENDING });
    try {
      const response = await axiosInstance.get(
        `/order/detail/${orderId}`
      );
      dispatch({
        type: ORDER_DETAIL_SUCCESS,
        payload: response.data,
      });
    } catch (error) {
      dispatch({ type: ORDER_DETAIL_FAILURE, error: error.message });
    }
  };
};
