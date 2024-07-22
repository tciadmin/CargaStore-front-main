import {
  ACEPT_ORDER_FAILURE,
  ACEPT_ORDER_PENDING,
  ACEPT_ORDER_SUCCESS,
} from '../Actions/ApplicationActions/aceptOrder';
import {
  APPLY_FOR_ORDER_FAILURE,
  APPLY_FOR_ORDER_PENDING,
  APPLY_FOR_ORDER_SUCCESS,
} from '../Actions/ApplicationActions/applyForOrder';
import {
  ASSING_DRIVER_FAILURE,
  ASSING_DRIVER_PENDING,
  ASSING_DRIVER_SUCCESS,
} from '../Actions/ApplicationActions/assignDriverToOrder';
import {
  DECLINE_ORDER_FAILURE,
  DECLINE_ORDER_PENDING,
  DECLINE_ORDER_SUCCESS,
} from '../Actions/ApplicationActions/declineOrder';

import { CLEAR_APPLICATION_MESSAGE } from '../Actions/ApplicationActions/clearApplicationMessage.js';

const initialState = {
  applicationLoading: false,
  applicationMessage: null,
  error: null,
};

export const applicationReducer = (state = initialState, action) => {
  switch (action.type) {
    case CLEAR_APPLICATION_MESSAGE:
      return {
        ...state,
        applicationMessage: null,
      };
    case APPLY_FOR_ORDER_PENDING:
      return {
        ...state,
        applicationLoading: true,
        error: null,
      };
    case APPLY_FOR_ORDER_SUCCESS:
      return {
        ...state,
        applicationMessage: action.payload.msg,
        applicationLoading: false,
      };
    case APPLY_FOR_ORDER_FAILURE:
      return {
        ...state,
        applicationLoading: false,
        error: action.error,
      };
    case ASSING_DRIVER_PENDING:
      return {
        ...state,
        applicationLoading: true,
        error: null,
      };
    case ASSING_DRIVER_SUCCESS:
      return {
        ...state,
        applicationLoading: false,
      };
    case ASSING_DRIVER_FAILURE:
      return {
        ...state,
        applicationLoading: false,
        error: action.error,
      };
    case DECLINE_ORDER_PENDING:
      return {
        ...state,
        applicationLoading: true,
        error: null,
      };
    case DECLINE_ORDER_SUCCESS:
      return {
        ...state,
        applicationLoading: false,
      };
    case DECLINE_ORDER_FAILURE:
      return {
        ...state,
        applicationLoading: false,
        error: action.error,
      };
    case ACEPT_ORDER_PENDING:
      return {
        ...state,
        applicationLoading: true,
        error: null,
      };
    case ACEPT_ORDER_SUCCESS:
      return {
        ...state,
        applicationLoading: false,
      };
    case ACEPT_ORDER_FAILURE:
      return {
        ...state,
        applicationLoading: false,
        error: action.error,
      };
    default:
      return { ...state };
  }
};
