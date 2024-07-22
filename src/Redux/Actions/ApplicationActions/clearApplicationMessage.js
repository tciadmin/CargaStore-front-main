export const CLEAR_APPLICATION_MESSAGE = 'CLEAR_APPLICATION_MESSAGE';

export const clearApplicationMessage = () => {
  return (dispatch) => {
    dispatch({ type: CLEAR_APPLICATION_MESSAGE });
  };
};
