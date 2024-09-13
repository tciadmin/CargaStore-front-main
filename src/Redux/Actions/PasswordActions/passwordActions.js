import { axiosInstance } from '../../axiosInstance';

import Cookies from 'js-cookie';
//?------------------------------------------PASSWORD
export const PASSWORD_RECOVERY_REQUEST_PENDING =
  'PASSWORD_RECOVERY_REQUEST_PENDING';
export const PASSWORD_RECOVERY_REQUEST_SUCCESS =
  'PASSWORD_RECOVERY_REQUEST_SUCCESS';
export const PASSWORD_RECOVERY_REQUEST_FAILURE =
  'PASSWORD_RECOVERY_REQUEST_FAILURE';

export const PASSWORD_CODE_AUTH_PENDING =
  'PASSWORD_CODE_AUTH_PENDING';
export const PASSWORD_CODE_AUTH_SUCCESS =
  'PASSWORD_CODE_AUTH_SUCCESS';
export const PASSWORD_CODE_AUTH_FAILURE =
  'PASSWORD_CODE_AUTH_FAILURE';

export const CHANGE_PASSWORD_PENDING = 'CHANGE_PASSWORD_PENDING';
export const CHANGE_PASSWORD_SUCCESS = 'CHANGE_PASSWORD_SUCCESS';
export const CHANGE_PASSWORD_FAILURE = 'CHANGE_PASSWORD_FAILURE';

export const SEND_EMAIL_PENDING = 'SEND_EMAIL_PENDING';
export const SEND_EMAIL_SUCCESS = 'SEND_EMAIL_SUCCESS';
export const SEND_EMAIL_FAILURE = 'SEND_EMAIL_FAILURE';

export const recoveryPassword = (email) => {
  return async (dispatch) => {
    dispatch({ type: PASSWORD_RECOVERY_REQUEST_PENDING });
    try {
      const request = await axiosInstance.post(
        '/auth/request_recovery',
        email
      );
      return dispatch({
        type: PASSWORD_RECOVERY_REQUEST_SUCCESS,
        payload: request,
      });
    } catch (error) {
      dispatch({
        type: PASSWORD_RECOVERY_REQUEST_FAILURE,
        error: error.message,
      });
    }
  };
};

export const verifyCode = (code) => {
  return async (dispatch) => {
    dispatch({ type: PASSWORD_CODE_AUTH_PENDING });
    try {
      const validate = axiosInstance.post(
        '/auth/validate_code',
        code
      );
      if (validate) {
        return dispatch({
          type: PASSWORD_CODE_AUTH_SUCCESS,
          payload: validate,
        });
      } else {
        alert('código inválido');
      }
    } catch (error) {
      dispatch({
        type: PASSWORD_CODE_AUTH_FAILURE,
        error: error.message,
      });
    }
  };
};

export const changePassword = (password) => {
  return async (dispatch) => {
    dispatch({ type: CHANGE_PASSWORD_PENDING });
    try {
      const userId = Cookies.get('id');
      const response = await axiosInstance.put(
        `/auth/change_password/${userId}`,
        { password }
      );
      return dispatch({
        type: CHANGE_PASSWORD_SUCCESS,
        payload: response.data,
      });
    } catch (error) {
      console.error({ error });
      dispatch({
        type: CHANGE_PASSWORD_FAILURE,
        payload: error.response.data,
      });
    }
  };
};

export const sendEmail = (email) => {
  return async (dispatch) => {
    dispatch({ type: SEND_EMAIL_PENDING });
    try {
      const mail = await axiosInstance.post(
        '/auth/resend_email',
        email
      );
      return dispatch({
        type: SEND_EMAIL_SUCCESS,
        payload: mail,
      });
    } catch (error) {
      dispatch({
        type: SEND_EMAIL_FAILURE,
        error: error.message,
      });
    }
  };
};
