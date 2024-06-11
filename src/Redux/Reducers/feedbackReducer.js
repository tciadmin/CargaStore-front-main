import {
  GET_FEEDBACK,
  POST_FEEDBACK,
} from "../Actions/FeedbackActions/feedbackActions";

const initialState = {
  allFeedback: [],
  feedback: [],
};

export const feedbackReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_FEEDBACK:
      return { ...state, feedback: action.payload };
    case POST_FEEDBACK:
      return { ...state, allFeedback: [...state.allFeedback, action.payload] };

    default:
      return { ...state };
  }
};
