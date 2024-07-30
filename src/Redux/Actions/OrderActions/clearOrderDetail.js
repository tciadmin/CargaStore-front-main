export const CLEAR_ORDER_DETAIL = 'CLEAR_ORDER_DETAIL';

export const clearOrderDetail = () => {
  return (dispatch) => {
    dispatch({ type: CLEAR_ORDER_DETAIL });
  };
};
