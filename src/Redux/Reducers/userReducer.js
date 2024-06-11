const initialState = {
  allUsers: [],
  driver: [],
  customer: [],
  feedback: [],
  allFeedback: [],
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return { ...state };
  }
};
