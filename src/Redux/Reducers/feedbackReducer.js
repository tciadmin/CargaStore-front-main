import {
  GET_FEEDBACK_SUCCESS,
  GET_FEEDBACK_PENDING,
  GET_FEEDBACK_FAILURE,
  POST_FEEDBACK_SUCCESS,
  POST_FEEDBACK_PENDING,
  POST_FEEDBACK_FAILURE,
} from '../Actions/FeedbackActions/feedbackActions';

const initialState = {
  allFeedback: [],
  singleFeedBackLoading: false,
  feedbackLoading: false,
  error: null,
};

export const feedbackReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_FEEDBACK_PENDING:
      return {
        ...state,
        feedbackLoading: true,
        error: null,
      };
    case GET_FEEDBACK_FAILURE:
      return {
        ...state,
        feedbackLoading: false,
        error: action.error,
      };
    case GET_FEEDBACK_SUCCESS:
      return {
        ...state,
        allFeedback: action.payload,
        feedbackLoading: false,
        error: null,
      };

    case POST_FEEDBACK_PENDING:
      return {
        ...state,
        singleFeedBackLoading: true,
        error: null,
      };
    case POST_FEEDBACK_FAILURE:
      return {
        ...state,
        singleFeedBackLoading: false,
        error: action.error,
      };
    case POST_FEEDBACK_SUCCESS:
      return {
        ...state,
        allFeedback: [action.payload, ...state.allFeedback],
        singleFeedBackLoading: false,
        error: null,
      };

    default:
      return { ...state };
  }
};
