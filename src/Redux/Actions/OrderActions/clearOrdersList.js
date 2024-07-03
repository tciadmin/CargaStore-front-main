export const CLEAR_ORDERS_LIST = 'CLEAR_ORDERS_LIST';

export const clearOrdersList = () => {
  return (dispatch) => {
    dispatch({ type: CLEAR_ORDERS_LIST, payload: [] });
  };
};
