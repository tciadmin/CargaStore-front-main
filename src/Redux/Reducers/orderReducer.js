import {
  LIST_ORDER_PENDING,
  LIST_ORDER_FAILURE,
  LIST_ORDER_SUCCESS,
} from '../Actions/OrderActions/listOrder';
import {
  ORDER_DETAIL_FAILURE,
  ORDER_DETAIL_PENDING,
  ORDER_DETAIL_SUCCESS,
} from '../Actions/OrderActions/orderDetail';

const initialState = {
  orders: [],
  ordersLoading: false,
  singleOrder: null,
  singleOrderLoading: false,
  error: null,
};

export const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case LIST_ORDER_PENDING:
      return {
        ...state,
        ordersLoading: true,
        error: null,
      };
    case LIST_ORDER_SUCCESS:
      return {
        ...state,
        ordersLoading: false,
        orders: action.payload.orders,
      };
    case LIST_ORDER_FAILURE:
      return {
        ...state,
        ordersLoading: false,
        error: action.error,
      };
    case ORDER_DETAIL_PENDING:
      return {
        ...state,
        singleOrderLoading: true,
        error: null,
      };
    case ORDER_DETAIL_SUCCESS:
      return {
        ...state,
        singleOrderLoading: false,
        singleOrder: action.payload,
      };
    case ORDER_DETAIL_FAILURE:
      return {
        ...state,
        singleOrderLoading: false,
        error: action.error,
      };
    default:
      return { ...state };
  }
};
