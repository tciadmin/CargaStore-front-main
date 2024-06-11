import {
  AUTH_USER,
  GET_ALL_USERS,
  GET_USER,
  PATCH_DRIVER,
  PATCH_TRUCK,
  POST_USER,
  PUT_CUSTOMER,
} from "../Actions/UserActions/userActions";

const initialState = {
  allUsers: [],
  user: [],
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_USERS:
      return { ...state, allUsers: state.allUsers };

    case GET_USER:
      return { ...state, user: action.paylad };

    case POST_USER:
      return { ...state, allUsers: [...state.allUsers, action.payload] };

    case AUTH_USER:
      return { ...state, user: action.paylad };

    case PUT_CUSTOMER:
      return { ...state, user: action.paylad };

    case PATCH_DRIVER:
      return { ...state, user: action.paylad };

    case PATCH_TRUCK:
      return { ...state, user: action.paylad };

    default:
      return { ...state };
  }
};
