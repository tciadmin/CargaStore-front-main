import {
  EDIT_TRUCK_FAILURE,
  EDIT_TRUCK_PENDING,
  EDIT_TRUCK_SUCCESS,
} from '../Actions/TruckActions/editTruck';

const initialState = {
  truckLoading: false,
  error: null,
  truckData: null,
};

export const truckReducer = (state = initialState, action) => {
  switch (action.type) {
    case EDIT_TRUCK_PENDING:
      return {
        ...state,
        truckLoading: true,
        error: null,
      };
    case EDIT_TRUCK_SUCCESS:
      return {
        ...state,
        truckLoading: false,
        truckData: action.payload,
      };
    case EDIT_TRUCK_FAILURE:
      return {
        ...state,
        truckLoading: false,
        error: action.error,
      };
    default:
      return { ...state };
  }
};
