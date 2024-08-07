import { CLEAR_ALERT } from '../Actions/AlertAction/clearAlert';
import {
  PATCH_BASIC_USER_FAILURE,
  PATCH_BASIC_USER_SUCCESS,
  PATCH_DRIVER_FAILURE,
  PATCH_DRIVER_LEGAL_DOCUMENTS_FAILURE,
  PATCH_DRIVER_LEGAL_DOCUMENTS_SUCCESS,
  PATCH_DRIVER_SUCCESS,
  PATCH_TRUCK_FAILURE,
  PATCH_TRUCK_SUCCESS,
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
    default:
      return { ...state };
  }
};
