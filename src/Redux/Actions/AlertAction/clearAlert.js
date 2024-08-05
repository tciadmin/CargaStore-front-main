export const CLEAR_ALERT = 'CLEAR_ALERT';

export const clearAlert = () => {
  return (dispatch) => {
    dispatch({ type: CLEAR_ALERT });
  };
};
