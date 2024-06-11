import {
  CHANGE_ORDER_STATE_FAILURE,
  CHANGE_ORDER_STATE_PENDING,
  CHANGE_ORDER_STATE_SUCCESS,
} from '../Actions/OrderActions/changeOrderState';
import {
  CREATE_ORDER_FAILURE,
  CREATE_ORDER_PENDING,
  CREATE_ORDER_SUCCESS,
} from '../Actions/OrderActions/createOrder';
import {
  DUPLICATE_ORDER_FAILURE,
  DUPLICATE_ORDER_PENDING,
  DUPLICATE_ORDER_SUCCESS,
} from '../Actions/OrderActions/duplicateorder';
import {
  EDIT_ORDER_FAILURE,
  EDIT_ORDER_PENDING,
  EDIT_ORDER_SUCCESS,
} from '../Actions/OrderActions/editOrder';
import {
  ORDER_STATE_FAILURE,
  ORDER_STATE_PENDING,
  ORDER_STATE_SUCCESS,
} from '../Actions/OrderActions/getOrderState';
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
  orderState: null,
  orderStateLoading: false,
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
    case CREATE_ORDER_PENDING:
      return {
        ...state,
        singleOrderLoading: true,
        error: null,
      };
    case CREATE_ORDER_SUCCESS:
      return { ...state, singleOrderLoading: false };
    case CREATE_ORDER_FAILURE:
      return {
        ...state,
        singleOrderLoading: false,
        error: action.error,
      };
    case DUPLICATE_ORDER_PENDING:
      return {
        ...state,
        singleOrderLoading: true,
        error: null,
      };
    case DUPLICATE_ORDER_SUCCESS:
      return {
        ...state,
        singleOrderLoading: false,
      };
    case DUPLICATE_ORDER_FAILURE:
      return {
        ...state,
        singleOrderLoading: false,
        error: action.error,
      };
    case EDIT_ORDER_PENDING:
      return {
        ...state,
        singleOrderLoading: true,
        error: null,
      };
    case EDIT_ORDER_SUCCESS:
      return {
        ...state,
        singleOrderLoading: false,
      };
    case EDIT_ORDER_FAILURE:
      return {
        ...state,
        singleOrderLoading: false,
        error: action.error,
      };
    case ORDER_STATE_PENDING:
      return {
        ...state,
        orderStateLoading: true,
        error: null,
      };
    case ORDER_STATE_SUCCESS:
      return {
        ...state,
        orderStateLoading: false,
        orderState: action.payload.orderState,
      };
    case ORDER_STATE_FAILURE:
      return {
        ...state,
        orderStateLoading: false,
        error: action.error,
      };
    case CHANGE_ORDER_STATE_PENDING:
      return {
        ...state,
        orderStateLoading: true,
        error: null,
      };
    case CHANGE_ORDER_STATE_SUCCESS:
      return {
        ...state,
        orderStateLoading: false,
        orderState: action.payload.orderState,
      };
    case CHANGE_ORDER_STATE_FAILURE:
      return {
        ...state,
        orderStateLoading: false,
        error: action.error,
      };
    default:
      return { ...state };
  }
};
