import {
  PAGE_INFO_FAILURE,
  PAGE_INFO_PENDING,
  PAGE_INFO_SUCCESS,
} from '../Actions/UserActions/pageInfo';

const initialState = {
  pageInfoLoading: false,
  pageData: null,
};

export const pageInfoReducer = (state = initialState, action) => {
  switch (action.type) {
    case PAGE_INFO_PENDING:
      return {
        ...state,
        pageInfoLoading: true,
      };
    case PAGE_INFO_SUCCESS:
      return {
        ...state,
        pageInfoLoading: false,
        pageData: action.payload,
      };
    case PAGE_INFO_FAILURE:
      return {
        ...state,
        pageInfoLoading: false,
      };
    default:
      return { ...state };
  }
};
