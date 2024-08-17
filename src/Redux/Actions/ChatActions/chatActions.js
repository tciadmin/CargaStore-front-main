import { axiosInstance } from '../../axiosInstance';
import Cookies from 'js-cookie';
const token = Cookies.get('token');
const headers = {
  Authorization: `Bearer ${token}`,
  id: Cookies.get('id'),
};
//?------------------------------------------USER
export const GET_ALL_CHAT_PENDING = 'GET_ALL_CHAT_PENDING';
export const GET_ALL_CHAT_SUCCESS = 'GET_ALL_CHAT_SUCCESS';
export const GET_ALL_CHAT_FAILURE = 'GET_ALL_CHAT_FAILURE';

export const GET_ALL_MESSAGES_PENDING = 'GET_ALL_MESSAGES_PENDING';
export const GET_ALL_MESSAGES_SUCCESS = 'GET_ALL_MESSAGES_SUCCESS';
export const GET_ALL_MESSAGES_FAILURE = 'GET_ALL_MESSAGES_FAILURE';

export const POST_CHAT_PENDING = 'POST_CHAT_PENDING';
export const POST_CHAT_SUCCESS = 'POST_CHAT_SUCCESS';
export const POST_CHAT_FAILURE = 'POST_CHAT_FAILURE';

export const CREATE_MESSAGE = 'CREATE_MESSAGE';

export const CLEAR_MESSAGES_LIST = 'CLEAR_MESSAGES_LIST';

export const getAllChats = (userId) => {
  return async (dispatch) => {
    dispatch({ type: GET_ALL_CHAT_PENDING });
    try {
      const allMessages = await axiosInstance.get('/chat/getAll', {
        headers:{
          'Authorization': `Bearer ${token}`,
          'id': `${userId}`,
        }
      });
      return dispatch({
        type: GET_ALL_CHAT_SUCCESS,
        payload: allMessages.data,
      });
    } catch (error) {
      console.error({ error });
      dispatch({ type: GET_ALL_CHAT_FAILURE, error: error.message });
    }
  };
};
export const getAllMessages = (chatID) => {
  return async (dispatch) => {
    dispatch({ type: GET_ALL_MESSAGES_PENDING });
    try {
      const allMessages = await axiosInstance.get(
        `/message/getAll/${chatID}`,
        { headers }
      );
      return dispatch({
        type: GET_ALL_MESSAGES_SUCCESS,
        payload: allMessages.data,
      });
    } catch (error) {
      dispatch({
        type: GET_ALL_MESSAGES_FAILURE,
        error: error.message,
      });
    }
  };
};

export const clearMessageList = () => {
  return (dispatch) => {
    dispatch({type: CLEAR_MESSAGES_LIST});
  }
}
export const postChat = async({clientId, driverId, orderId, driverName, driverLastname}) => {
    try {
      const messageContent = `Hola soy ${driverName} ${driverLastname} y soy el conductor asignado a la orden #${orderId}`
      await axiosInstance.post('/chat/create',{orderId, driverId, messageContent}, {
        headers:{
          'id': `${clientId}`
        }
      })
    } catch (error) {
      console.error(error)
    }
  }

export const createMessage = ({
  id,
  chatID,
  emisorID,
  message,
  createdAt,
}) => {
  return (dispatch) => {
    dispatch({
      type: CREATE_MESSAGE,
      payload: { id, chatID, emisorID, message, createdAt },
    });
  };
};
