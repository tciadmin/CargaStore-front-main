import { CLEAR_ALERT } from '../Actions/AlertAction/clearAlert';
import {
  APPLY_FOR_ORDER_FAILURE,
  APPLY_FOR_ORDER_SUCCESS,
} from '../Actions/ApplicationActions/applyForOrder';
import {
  CREATE_ORDER_FAILURE,
  CREATE_ORDER_SUCCESS,
} from '../Actions/OrderActions/createOrder';
import {
  DUPLICATE_ORDER_FAILURE,
  DUPLICATE_ORDER_SUCCESS,
} from '../Actions/OrderActions/duplicateorder';
import {
  EDIT_ORDER_FAILURE,
  EDIT_ORDER_SUCCESS,
} from '../Actions/OrderActions/editOrder';
import {
  AUTH_USER_FAILURE,
  AUTH_USER_SUCCESS,
  PATCH_BASIC_USER_FAILURE,
  PATCH_BASIC_USER_SUCCESS,
  PATCH_DRIVER_FAILURE,
  PATCH_DRIVER_LEGAL_DOCUMENTS_FAILURE,
  PATCH_DRIVER_LEGAL_DOCUMENTS_SUCCESS,
  PATCH_DRIVER_SUCCESS,
  PATCH_TRUCK_FAILURE,
  PATCH_TRUCK_SUCCESS,
  POST_USER_FAILURE,
  POST_USER_SUCCESS,
  PUT_CUSTOMER_FAILURE,
  PUT_CUSTOMER_SUCCESS,
} from '../Actions/UserActions/userActions';

const initialState = {
  message: null,
};

export const alertReducer = (state = initialState, action) => {
  switch (action.type) {
    case CLEAR_ALERT:
      return { ...state, message: null };
    case PATCH_BASIC_USER_SUCCESS:
      return {
        ...state,
        message: action.payload.message,
      };
    case PATCH_BASIC_USER_FAILURE:
      return {
        ...state,
        message: action.payload.message,
      };
    case PATCH_DRIVER_SUCCESS:
      return {
        ...state,
        message: action.payload.message,
      };
    case PATCH_DRIVER_FAILURE:
      return {
        ...state,
        message: action.payload.message,
      };
    case PATCH_TRUCK_SUCCESS:
      return {
        ...state,
        message: action.payload.message,
      };
    case PATCH_TRUCK_FAILURE:
      return {
        ...state,
        message: action.payload.message,
      };
    case PATCH_DRIVER_LEGAL_DOCUMENTS_SUCCESS:
      return {
        ...state,
        message: action.payload.message,
      };
    case PATCH_DRIVER_LEGAL_DOCUMENTS_FAILURE:
      return {
        ...state,
        message: action.payload.message,
      };
    case PUT_CUSTOMER_SUCCESS:
      return {
        ...state,
        message: action.payload.message,
      };
    case PUT_CUSTOMER_FAILURE:
      return {
        ...state,
        message: action.payload.message,
      };
    case CREATE_ORDER_SUCCESS:
      return {
        ...state,
        message: action.payload.message,
      };
    case CREATE_ORDER_FAILURE:
      return {
        ...state,
        message: action.payload.message,
      };
    case DUPLICATE_ORDER_SUCCESS:
      return {
        ...state,
        message: action.payload.message,
      };
    case DUPLICATE_ORDER_FAILURE:
      return {
        ...state,
        message: action.payload.message,
      };
    case POST_USER_SUCCESS:
      return {
        ...state,
        message: action.payload.message,
      };
    case POST_USER_FAILURE:
      return {
        ...state,
        message: action.payload.message,
      };
    case AUTH_USER_SUCCESS:
      return {
        ...state,
        message: action.payload.message,
      };
    case AUTH_USER_FAILURE:
      return {
        ...state,
        message: action.payload.message,
      };
    case EDIT_ORDER_SUCCESS:
      return {
        ...state,
        message: action.payload.message,
      };
    case EDIT_ORDER_FAILURE:
      return {
        ...state,
        message: action.payload.message,
      };
    case APPLY_FOR_ORDER_SUCCESS:
      return {
        ...state,
        message: action.payload.message,
      };
    case APPLY_FOR_ORDER_FAILURE:
      return {
        ...state,
        message: action.payload?.message,
      };
    default:
      return { ...state };
  }
};
