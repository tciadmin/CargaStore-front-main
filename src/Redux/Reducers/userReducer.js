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
  PATCH_BASIC_USER_SUCCESS,
  PATCH_BASIC_USER_PENDING,
  PATCH_BASIC_USER_FAILURE,
  PATCH_DRIVER_LEGAL_DOCUMENTS_PENDING,
  PATCH_DRIVER_LEGAL_DOCUMENTS_SUCCESS,
} from '../Actions/UserActions/userActions';

const initialState = {
  userLoading: false,
  passwordLoading: false,
  token: null,
  user: {},
  allUsers: [],
  request: [],
  email: [],
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
    case GET_USER_SUCCESS: {
      const { token, user } = action.payload;
      return {
        ...state,
        token,
        user,
        userLoading: false,
        error: null,
      };
    }

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
    case POST_USER_SUCCESS: {
      const { token, user } = action.payload;

      return {
        ...state,
        token,
        user,
        allUsers: [...state.allUsers, user],
        userLoading: false,
        error: null,
      };
    }

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
    case AUTH_USER_SUCCESS: {
      const { token, user } = action.payload;

      return {
        ...state,
        token,
        user,
        userLoading: false,
        error: null,
      };
    }

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
      };
    case PUT_CUSTOMER_SUCCESS:
      return {
        ...state,
        user: {
          ...state.user,
          customer: {
            ...state.user.customer,
            company_name: action.payload.customer?.company_name,
            ruc: action.payload.customer?.ruc,
            company_phone: action.payload.customer?.company_phone,
            address: action.payload.customer?.address,
            country: action.payload.customer?.country,
            city: action.payload.customer?.city,
          },
        },
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
      };
    case PATCH_DRIVER_SUCCESS:
      return {
        ...state,
        user: {
          ...state.user,
          name: action.payload.user?.name,
          lastname: action.payload.user?.lastname,
          profile_image: action.payload.user?.profile_image,
          driver: {
            ...state.user.driver,
            description: action.payload.driver?.description,
            phone: action.payload.driver?.phone,
          },
        },
        userLoading: false,
        error: null,
      };
    case PATCH_BASIC_USER_PENDING:
      return {
        ...state,
        userLoading: true,
        error: null,
      };
    case PATCH_BASIC_USER_FAILURE:
      return {
        ...state,
        userLoading: false,
        error: action.error,
      };
    case PATCH_BASIC_USER_SUCCESS:
      return {
        ...state,
        user: {
          ...state.user,
          name: action.payload.updatedUser?.name,
          lastname: action.payload.updatedUser?.lastname,
          profile_image: action.payload.updatedUser?.profile_image,
        },
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
        user: {
          ...state.user,
          driver: {
            ...state.user.driver,
            truck: {
              ...state.user.driver.truck,
              brand: action.payload.truck?.brand,
              model: action.payload.truck?.model,
              year: action.payload.truck?.year,
              num_plate: action.payload.truck?.num_plate,
              charge_capacity: action.payload.truck?.charge_capacity,
              charge_type: action.payload.truck?.charge_type,
            },
          },
        },
        // user: action.payload,
        userLoading: false,
        error: null,
      };
    case PATCH_DRIVER_LEGAL_DOCUMENTS_PENDING:
      return {
        ...state,
        userLoading: true,
      };
    case PATCH_DRIVER_LEGAL_DOCUMENTS_SUCCESS:
      return {
        ...state,
        user: {
          ...state.user,
          driver: {
            ...state.user.driver,
            num_license: action.payload.updatedDriver?.num_license,
            iess: action.payload.updatedDriver?.iess,
            port_permit: action.payload.updatedDriver?.port_permit,
            insurance_policy:
              action.payload.updatedDriver?.insurance_policy,
            img_insurance_policy:
              action.payload.updatedDriver?.img_insurance_policy,
            img_driver_license:
              action.payload.updatedDriver?.img_driver_license,
            pdf_iess: action.payload.updatedDriver?.pdf_iess,
            pdf_port_permit:
              action.payload.updatedDriver?.pdf_port_permit,
          },
        },
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
