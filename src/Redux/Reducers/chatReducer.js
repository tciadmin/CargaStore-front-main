
  import {
    
    GET_ALL_MESSAGES_FAILURE,
    GET_ALL_MESSAGES_SUCCESS,
    GET_ALL_MESSAGES_PENDING,
   
    GET_ALL_CHAT_SUCCESS,
    GET_ALL_CHAT_PENDING,
    GET_ALL_CHAT_FAILURE

  } from '../Actions/ChatActions/chatActions';
  
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
  
  export const chatReducer = (state = initialState, action) => {
    switch (action.type) {
      case GET_ALL_MESSAGES_PENDING:
        return {
          ...state,
          userLoading: true,
          error: null,
        };
      case GET_ALL_MESSAGES_FAILURE:
        return {
          ...state,
          userLoading: false,
          error: action.error,
        };
      case GET_ALL_MESSAGES_SUCCESS:
        return {
          ...state,
          messages: action.payload,
          userLoading: false,
          error: null,
        };
        case GET_ALL_CHAT_FAILURE:
            return {
              ...state,
              chatLoading: false,
              error: action.error,
            };
          case GET_ALL_CHAT_PENDING:
            return {
              ...state,
              chatLoading: true,
              error: null,
            };
  
      case GET_ALL_CHAT_SUCCESS:
        return {
          ...state,
          chats: {...action.payload},
          chatLoading: false,
          error: null,
        };
    
  
      default:
        return { ...state };
    }
  };
  