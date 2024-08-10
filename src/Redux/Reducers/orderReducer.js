import { ACEPT_ORDER_SUCCESS } from '../Actions/ApplicationActions/aceptOrder';
import { APPLY_FOR_ORDER_SUCCESS } from '../Actions/ApplicationActions/applyForOrder';
import { ASSING_DRIVER_SUCCESS } from '../Actions/ApplicationActions/assignDriverToOrder';
import { DECLINE_ORDER_SUCCESS } from '../Actions/ApplicationActions/declineOrder';
import {
  CHANGE_ORDER_STATE_FAILURE,
  CHANGE_ORDER_STATE_PENDING,
  CHANGE_ORDER_STATE_SUCCESS,
} from '../Actions/OrderActions/changeOrderState';
import { CLEAR_ORDER_DETAIL } from '../Actions/OrderActions/clearOrderDetail';
import { CLEAR_ORDER_STATE } from '../Actions/OrderActions/clearOrderState';
import { CLEAR_ORDERS_LIST } from '../Actions/OrderActions/clearOrdersList';
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
import {
  FINISH_ORDER_PENDING,
  FINISH_ORDER_SUCCESS,
  FINISH_ORDER_FAILURE,
} from '../Actions/OrderActions/finishOrder';

const initialState = {
  orders: [],
  ordersLoading: false,
  message: null,
  status: null,
  singleOrder: null,
  singleOrderLoading: false,
  orderState: null,
  orderStateLoading: false,
  changingOrderState: false,
  duplicating: false,
  editingOrder: false,
  error: null,
};

export const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case CLEAR_ORDER_DETAIL:
      return {
        ...state,
        singleOrder: null,
      };
    case CLEAR_ORDERS_LIST:
      return {
        ...state,
        orders: action.payload,
        message: null,
        status: null,
      };
    case CLEAR_ORDER_STATE:
      return {
        ...state,
        orderState: action.payload,
      };
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
        message: action.message,
        status: action.status,
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
        duplicating: false,
        error: action.error,
      };
    case DUPLICATE_ORDER_PENDING:
      return {
        ...state,
        duplicating: true,
        error: null,
      };
    case DUPLICATE_ORDER_SUCCESS:
      return {
        ...state,
        duplicating: false,
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
        editingOrder: true,
        error: null,
      };
    case EDIT_ORDER_SUCCESS:
      return {
        ...state,
        editingOrder: false,
      };
    case EDIT_ORDER_FAILURE:
      return {
        ...state,
        editingOrder: false,
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
        changingOrderState: true,
        error: null,
      };
    case CHANGE_ORDER_STATE_SUCCESS:
      return {
        ...state,
        changingOrderState: false,
        orderState: {
          ...state.orderState,
          enPreparacion: action.payload.orderState.enPreparacion,
          preparado: action.payload.orderState.preparado,
          retirado: action.payload.orderState.retirado,
          enCamino: action.payload.orderState.enCamino,
        },
      };
    case CHANGE_ORDER_STATE_FAILURE:
      return {
        ...state,
        changingOrderState: false,
        error: action.error,
      };
    case FINISH_ORDER_PENDING:
      return {
        ...state,
        changingOrderState: true,
        error: null,
      };
    case FINISH_ORDER_SUCCESS:
      return {
        ...state,
        changingOrderState: false,
        singleOrder: {
          ...state.singleOrder,
          status: action.payload.orderStatus,
        },
      };
    case FINISH_ORDER_FAILURE:
      return {
        ...state,
        changingOrderState: false,
        error: action.error,
      };

    //POSTULACIONES

    case APPLY_FOR_ORDER_SUCCESS:
      return {
        ...state,
        singleOrder: {
          ...state.singleOrder,
          applications: [
            action.payload.application,
            ...state.singleOrder.applications,
          ],
        },
      };

    case ASSING_DRIVER_SUCCESS:
      return {
        ...state,
        singleOrder: {
          ...state.singleOrder,
          pendingAssignedDriverId:
            action.payload.pendingAssignedDriverId,
        },
      };

    case ACEPT_ORDER_SUCCESS:
      return {
        ...state,
        singleOrder: {
          ...state.singleOrder,
          status: action.payload.orderStatus,
          pendingAssignedDriverId:
            action.payload.pendingAssignedDriverId,
        },
      };

    case DECLINE_ORDER_SUCCESS:
      return {
        ...state,
        singleOrder: {
          ...state.singleOrder,
          pendingAssignedDriverId:
            action.payload.pendingAssignedDriverId,
          applications: state.singleOrder.applications.filter(
            (application) =>
              application.id !== action.payload.deletedApplication.id
          ),
        },
      };
    default:
      return { ...state };
  }
};
