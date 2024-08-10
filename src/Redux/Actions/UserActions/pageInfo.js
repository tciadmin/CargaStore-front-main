import { axiosInstance } from '../../axiosInstance';

export const PAGE_INFO_PENDING = 'PAGE_INFO_PENDING';
export const PAGE_INFO_SUCCESS = 'PAGE_INFO_SUCCESS';
export const PAGE_INFO_FAILURE = 'PAGE_INFO_FAILURE';

export const pageInfo = () => {
  return async (dispatch) => {
    dispatch({ type: PAGE_INFO_PENDING });
    try {
      const response = await axiosInstance.get('/users/page_info');
      dispatch({ type: PAGE_INFO_SUCCESS, payload: response.data });
    } catch (error) {
      console.error(error);
      dispatch({
        type: PAGE_INFO_FAILURE,
      });
    }
  };
};
