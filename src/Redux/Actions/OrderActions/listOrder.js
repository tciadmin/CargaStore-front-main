import { axiosInstance } from '../../axiosInstance';

export const LIST_ORDER_PENDING = 'LIST_ORDER_PENDING';
export const LIST_ORDER_SUCCESS = 'LIST_ORDER_SUCCESS';
export const LIST_ORDER_FAILURE = 'LIST_ORDER_FAILURE';

export const listOrder = (
  status,
  orderType,
  customerId,
  pendingAssignedDriverId,
  assignedDriverId
) => {
  return async (dispatch) => {
    dispatch({ type: LIST_ORDER_PENDING });
    try {
      const response = await axiosInstance.get(
        `/order/list_order?status=${status}&orderType=${orderType}&customerId=${customerId}&pendingAssignedDriverId=${pendingAssignedDriverId}&assignedDriverId=${assignedDriverId}`
      );
      let message = '';
      if (customerId || pendingAssignedDriverId || assignedDriverId) {
        if (!response.data.orders.length) {
          if (status === 'pendiente') {
            message = `Aun no tienes envíos ${
              customerId ? 'generados' : 'pendientes'
            }`;
          } else if (status === 'asignado') {
            message = 'Aun no tienes envíos asignados';
          } else if (status === 'en curso') {
            message = 'Aun no tienes envíos en curso';
          } else if (status === 'finalizado') {
            message = 'Aun no tienes envíos finalizados';
          }
        }
      }
      dispatch({
        type: LIST_ORDER_SUCCESS,
        payload: response.data,
        message,
        status,
      });
    } catch (error) {
      dispatch({ type: LIST_ORDER_FAILURE, error: error.message });
    }
  };
};
