export const CLEAR_SINGLE_DRIVER = 'CLEAR_SINGLE_DRIVER';

export const clearSingleDriver = () => {
  return (dispatch) => {
    dispatch({ type: CLEAR_SINGLE_DRIVER, payload: null });
  };
};
