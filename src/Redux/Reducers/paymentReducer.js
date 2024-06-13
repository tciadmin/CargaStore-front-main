import {
  FILTER_PAYMENT_FAILURE,
  FILTER_PAYMENT_PENDING,
  FILTER_PAYMENT_SUCCESS,
  GET_ADMIN_PAY_HISTORY_FAILURE,
  GET_ADMIN_PAY_HISTORY_PENDING,
  GET_ADMIN_PAY_HISTORY_SUCCESS,
  GET_DRIVER_PAY_HISTORY_FAILURE,
  GET_DRIVER_PAY_HISTORY_PENDING,
  GET_DRIVER_PAY_HISTORY_SUCCESS,
  PAYMENT_DETAIL_FAILURE,
  PAYMENT_DETAIL_PENDING,
  PAYMENT_DETAIL_SUCCESS,
  POST_PAYMENT_FAILURE,
  POST_PAYMENT_PENDING,
  POST_PAYMENT_SUCCESS,
} from "../Actions/PaymentActions/paymentActions";

const initialState = {
  adminPayment: [],
  driverPayment: [],
  allPayments: [],
  payment: [],
  paymentLoading: false,
  error: null,
};

export const paymentReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ADMIN_PAY_HISTORY_PENDING:
      return { ...state, paymentLoading: true, error: null };
    case GET_ADMIN_PAY_HISTORY_FAILURE:
      return { ...state, paymentLoading: false, error: action.error };
    case GET_ADMIN_PAY_HISTORY_SUCCESS:
      return {
        ...state,
        adminPayment: action.payload,
        paymentLoading: false,
        error: null,
      };

    case GET_DRIVER_PAY_HISTORY_PENDING:
      return { ...state, paymentLoading: true, error: null };
    case GET_DRIVER_PAY_HISTORY_FAILURE:
      return { ...state, paymentLoading: false, error: action.error };
    case GET_DRIVER_PAY_HISTORY_SUCCESS:
      return {
        ...state,
        driverPayment: action.payload,
        paymentLoading: false,
        error: null,
      };

    case PAYMENT_DETAIL_PENDING:
      return { ...state, paymentLoading: true, error: null };
    case PAYMENT_DETAIL_FAILURE:
      return { ...state, paymentLoading: false, error: action.error };
    case PAYMENT_DETAIL_SUCCESS:
      return {
        ...state,
        payment: action.payload,
        paymentLoading: false,
        error: null,
      };

    case FILTER_PAYMENT_PENDING:
      return { ...state, paymentLoading: true, error: null };
    case FILTER_PAYMENT_FAILURE:
      return { ...state, paymentLoading: false, error: action.error };
    case FILTER_PAYMENT_SUCCESS:
      return {
        ...state,
        payment: [state.allPayments, action.payload],
        paymentLoading: false,
        error: null,
      };

    case POST_PAYMENT_PENDING:
      return { ...state, paymentLoading: true, error: null };
    case POST_PAYMENT_FAILURE:
      return { ...state, paymentLoading: false, error: action.error };
    case POST_PAYMENT_SUCCESS:
      return {
        ...state,
        allPayment: [...state.allPayments, action.payload],
        paymentLoading: false,
        error: null,
      };

    default:
      return { ...state };
  }
};
