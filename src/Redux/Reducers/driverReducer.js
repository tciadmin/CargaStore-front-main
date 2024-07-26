import { CLEAR_SINGLE_DRIVER } from '../Actions/DriverAction/clearSingleDriver';
import {
  GET_DRIVER_FAILURE,
  GET_DRIVER_PENDING,
  GET_DRIVER_SUCCESS,
} from '../Actions/DriverAction/driverDetail';
import {
  GET_DRIVER_LIST_PENDING,
  GET_DRIVER_LIST_SUCCESS,
  GET_DRIVER_LIST_FAILURE,
} from '../Actions/DriverAction/getDriverList';

const initialState = {
  singleDriver: null,
  singleDriverLoading: false,
  driverList: [],
  driverListLoading: false,
};

export const driverReducer = (state = initialState, action) => {
  switch (action.type) {
    case CLEAR_SINGLE_DRIVER:
      return {
        ...state,
        singleDriver: action.payload,
      };
    case GET_DRIVER_PENDING:
      return {
        ...state,
        singleDriverLoading: true,
      };
    case GET_DRIVER_FAILURE:
      return {
        ...state,
        singleDriverLoading: false,
      };
    case GET_DRIVER_SUCCESS:
      return {
        ...state,
        singleDriverLoading: false,
        singleDriver: action.payload,
      };
    case GET_DRIVER_LIST_PENDING:
      return {
        ...state,
        driverListLoading: true,
      };
    case GET_DRIVER_LIST_FAILURE:
      return {
        ...state,
        driverListLoading: false,
      };
    case GET_DRIVER_LIST_SUCCESS:
      return {
        ...state,
        driverListLoading: false,
        driverList: action.payload,
      };
    default:
      return { ...state };
  }
};
