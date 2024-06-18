import {
  CHANGE_PASSWORD_FAILURE,
  CHANGE_PASSWORD_PENDING,
  CHANGE_PASSWORD_SUCCESS,
  PASSWORD_CODE_AUTH_FAILURE,
  PASSWORD_CODE_AUTH_PENDING,
  PASSWORD_CODE_AUTH_SUCCESS,
  PASSWORD_RECOVERY_REQUEST_FAILURE,
  PASSWORD_RECOVERY_REQUEST_PENDING,
  PASSWORD_RECOVERY_REQUEST_SUCCESS,
  SEND_EMAIL_FAILURE,
  SEND_EMAIL_PENDING,
  SEND_EMAIL_SUCCESS,
} from '../Actions/PasswordActions/passwordActions';
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
} from '../Actions/UserActions/userActions';

const initialState = {
  allUsers: [],
  user: [],
  request: [],
  email: [],
  userLoading: false,
  passwordLoading: false,
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

    case PUT_CUSTOMER_PENDING:
      return {
        ...state,
        userLoading: true,
        error: null,
      };
    case PUT_CUSTOMER_FAILURE:
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

    case PASSWORD_RECOVERY_REQUEST_PENDING:
      return {
        ...state,
        passwordLoading: true,
        error: null,
      };
    case PASSWORD_RECOVERY_REQUEST_FAILURE:
      return {
        ...state,
        passwordLoading: false,
        error: action.error,
      };
    case PASSWORD_RECOVERY_REQUEST_SUCCESS:
      return {
        ...state,
        request: action.payload,
        userLoading: false,
        error: null,
      };

    case SEND_EMAIL_PENDING:
      return { ...state, passwordLoading: true, error: null };
    case SEND_EMAIL_FAILURE:
      return {
        ...state,
        passwordLoading: false,
        error: action.error,
      };
    case SEND_EMAIL_SUCCESS:
      return {
        ...state,
        request: action.payload,
        email: action.payload,
        userLoading: false,
        error: null,
      };

    case PASSWORD_CODE_AUTH_PENDING:
      return { ...state, passwordLoading: true, error: null };
    case PASSWORD_CODE_AUTH_FAILURE:
      return {
        ...state,
        passwordLoading: false,
        error: action.error,
      };
    case PASSWORD_CODE_AUTH_SUCCESS:
      return {
        ...state,
        email: action.payload,
        userLoading: false,
        error: null,
      };

    case CHANGE_PASSWORD_PENDING:
      return { ...state, passwordLoading: true, error: null };
    case CHANGE_PASSWORD_FAILURE:
      return {
        ...state,
        passwordLoading: false,
        error: action.error,
      };
    case CHANGE_PASSWORD_SUCCESS:
      return {
        ...state,
        user: [state.user.password, action.payload],
        userLoading: false,
        error: null,
      };

    default:
      return { ...state };
  }
};
