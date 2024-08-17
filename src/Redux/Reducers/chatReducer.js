import {
  GET_ALL_MESSAGES_FAILURE,
  GET_ALL_MESSAGES_SUCCESS,
  GET_ALL_MESSAGES_PENDING,
  GET_ALL_CHAT_SUCCESS,
  GET_ALL_CHAT_PENDING,
  GET_ALL_CHAT_FAILURE,
  // CREATE_MESSAGE_FAILURE,
  // CREATE_MESSAGE_SUCCESS,
  // CREATE_MESSAGE_PENDING,
  CREATE_MESSAGE,
  CLEAR_MESSAGES_LIST,
} from '../Actions/ChatActions/chatActions';

const initialState = {
  messagesListLoading: false,
  chatsLoading: false,
  messagesList: [],
  chats: [],
  error: null,
};

export const chatReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_MESSAGES_PENDING:
      return {
        ...state,
        messagesListLoading: true,
        error: null,
      };
    case GET_ALL_MESSAGES_FAILURE:
      return {
        ...state,
        messagesListLoading: false,
        error: action.error,
      };
    case GET_ALL_MESSAGES_SUCCESS:
      return {
        ...state,
        messagesList: action.payload,
        messagesListLoading: false,
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
        chats: { ...action.payload },
        chatLoading: false,
        error: null,
      };
    case CREATE_MESSAGE:
      return {
        ...state,
        messagesList: [action.payload, ...state.messagesList],
      };
      case CLEAR_MESSAGES_LIST:
        return {
          ...state, messageList:[]
        };
    // case CREATE_MESSAGE_FAILURE:
    //   return {
    //     ...state,
    //     chatLoading: false,
    //     error: action.error,
    //   };
    // case CREATE_MESSAGE_PENDING:
    //   return {
    //     ...state,
    //     chatLoading: true,
    //     error: null,
    //   };

    // case CREATE_MESSAGE_SUCCESS:
    //   return {
    //     ...state,
    //     chats: { ...action.payload },
    //     chatLoading: false,
    //     error: null,
    //   };

    default:
      return { ...state };
  }
};
