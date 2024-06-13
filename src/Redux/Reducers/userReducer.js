import {
  AUTH_USER_SUCCESS,
  AUTH_USER_FAILURE,
  AUTH_USER_PENDING,
  GET_ALL_USERS_FAILURE,
  GET_ALL_USERS_SUCCESS,
  GET_ALL_USERS_PENDING,
  GET_USER_FAILURE,
  GET_USER_PENDING,
  GET_USER_SUCCESS,
  PATCH_DRIVER_FAILURE,
  PATCH_DRIVER_PENDING,
  PATCH_DRIVER_SUCCESS,
  PATCH_TRUCK_FAILURE,
  PATCH_TRUCK_PENDING,
  PATCH_TRUCK_SUCCESS,
  POST_USER_FAILURE,
  POST_USER_PENDING,
  POST_USER_SUCCESS,
  PUT_CUSTOMER_FAILURE,
  PUT_CUSTOMER_PENDING,
  PUT_CUSTOMER_SUCCESS,
} from "../Actions/UserActions/userActions";

const initialState = {
  allUsers: [],
  user: [],
  userLoading: false,
  error: null,
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_USERS_PENDING:
      return {
        ...state,
        userLoading: true,
        error: null,
      };
    case GET_ALL_USERS_FAILURE:
      return {
        ...state,
        userLoading: false,
        error: action.error,
      };
    case GET_ALL_USERS_SUCCESS:
      return {
        ...state,
        allUsers: state.allUsers,
        userLoading: false,
        error: null,
      };

    case GET_USER_PENDING:
      return {
        ...state,
        userLoading: true,
        error: null,
      };
    case GET_USER_FAILURE:
      return {
        ...state,
        userLoading: false,
        error: action.error,
      };
    case GET_USER_SUCCESS:
      return {
        ...state,
        user: action.payload,
        userLoading: false,
        error: null,
      };

    case POST_USER_PENDING:
      return {
        ...state,
        userLoading: true,
        error: null,
      };
    case POST_USER_FAILURE:
      return {
        ...state,
        userLoading: false,
        error: action.error,
      };
    case POST_USER_SUCCESS:
      return {
        ...state,
        allUsers: [...state.allUsers, action.payload],
        userLoading: false,
        error: null,
      };

    case AUTH_USER_PENDING:
      return {
        ...state,
        userLoading: true,
        error: null,
      };
    case AUTH_USER_FAILURE:
      return {
        ...state,
        userLoading: false,
        error: action.error,
      };
    case AUTH_USER_SUCCESS:
      return {
        ...state,
        user: action.payload,
        userLoading: false,
        error: null,
      };

    case PUT_CUSTOMER_USER_PENDING:
      return {
        ...state,
        userLoading: true,
        error: null,
      };
    case PUT_CUSTOMER_USER_FAILURE:
      return {
        ...state,
        userLoading: false,
        error: action.error,
      };
    case PUT_CUSTOMER_SUCCESS:
      return {
        ...state,
        user: action.payload,
        userLoading: false,
        error: null,
      };

    case PATCH_DRIVER_PENDING:
      return {
        ...state,
        userLoading: true,
        error: null,
      };
    case PATCH_DRIVER_FAILURE:
      return {
        ...state,
        userLoading: false,
        error: action.error,
      };
    case PATCH_DRIVER_SUCCESS:
      return {
        ...state,
        user: action.payload,
        userLoading: false,
        error: null,
      };

    case PATCH_TRUCK_PENDING:
      return {
        ...state,
        userLoading: true,
        error: null,
      };
    case PATCH_TRUCK_FAILURE:
      return {
        ...state,
        userLoading: false,
        error: action.error,
      };
    case PATCH_TRUCK_SUCCESS:
      return {
        ...state,
        user: action.payload,
        userLoading: false,
        error: null,
      };

    default:
      return { ...state };
  }
};
