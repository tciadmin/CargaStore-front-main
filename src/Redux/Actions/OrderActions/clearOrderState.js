export const CLEAR_ORDER_STATE = 'CLEAR_ORDER_STATE';

export const clearOrderState = () => {
  return (dispatch) => {
    dispatch({ type: CLEAR_ORDER_STATE, payload: null });
  };
};
