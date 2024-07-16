import { axiosInstance } from '../../axiosInstance';
//?------------------------------------------FEEDBACK
export const POST_FEEDBACK_PENDING = 'POST_FEEDBACK_PENDING';
export const POST_FEEDBACK_SUCCESS = 'POST_FEEDBACK_SUCCESS';
export const POST_FEEDBACK_FAILURE = 'POST_FEEDBACK_FAILURE';

export const GET_FEEDBACK_PENDING = 'GET_FEEDBACK_PENDING';
export const GET_FEEDBACK_SUCCESS = 'GET_FEEDBACK_SUCCESS_SUCCESS';
export const GET_FEEDBACK_FAILURE = 'GET_FEEDBACK_FAILURE';

export const getFeedback = (id) => {
  return async (dispatch) => {
    dispatch({ type: GET_FEEDBACK_PENDING });
    try {
      const comment = await axiosInstance(`/feedback/get/${id}`);
      return dispatch({
        type: GET_FEEDBACK_SUCCESS,
        payload: comment.data,
      });
    } catch (error) {
      dispatch({ type: GET_FEEDBACK_FAILURE, error: error.message });
    }
  };
};

export const postFeedback = (feedback) => {
  console.log('feedback data: ', feedback);
  const { customerId, driverId, comment, score } = feedback;
  return async (dispatch) => {
    dispatch({ type: POST_FEEDBACK_PENDING });

    try {
      const response = await axiosInstance.post('/feedback/create', {
        customerId,
        driverId,
        comment,
        score,
      });
      return dispatch({
        type: POST_FEEDBACK_SUCCESS,
        payload: response.data,
      });
    } catch (error) {
      dispatch({ type: POST_FEEDBACK_FAILURE, error: error.message });
    }
  };
};
