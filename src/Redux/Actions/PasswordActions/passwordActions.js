import { axiosInstance } from "../../axiosInstance";
//?------------------------------------------PASSWORD
export const PASSWORD_RECOVERY_REQUEST = "PASSWORD_RECOVERY_REQUEST";
export const PASSWORD_CODE_AUTH = "PASSWORD_CODE_AUTH";
export const CHANGE_PASSWORD = "CHANGE_PASSWORD";
export const SEND_EMAIL = "SEND_EMAIL";

export const recoveryPassword = (email) => {
  return async (dispatch) => {
    try {
      const request = await axiosInstance.post("/auth/request_recovery", email);
      return dispatch({
        type: PASSWORD_RECOVERY_REQUEST,
        payload: request,
      });
    } catch (error) {
      console.log("Se produjo un error al recuperar contraseña");
    }
  };
};

export const verifyCode = (code) => {
  return async (dispatch) => {
    try {
      const validate = axiosInstance.post("/auth/validate_code", code);
      if (validate) {
        console.log("codigo validado con éxito");
        return dispatch({
          type: PASSWORD_CODE_AUTH,
          payload: validate,
        });
      } else {
        alert("código inválido");
      }
    } catch (error) {
      console.log("Se produjo un error al validar el código");
    }
  };
};

export const changePassword = (password) => {
  return async (dispatch) => {
    try {
      const newPassword = await axiosInstance.put(
        "/auth/change_password",
        password
      );
      return dispatch({
        type: CHANGE_PASSWORD,
        payload: newPassword,
      });
    } catch (error) {
      console.log("Se produjo un error al cambiar la contraseña");
    }
  };
};

export const sendEmail = (email) => {
  return async (dispatch) => {
    try {
      const mail = await axiosInstance.post("/auth/resend_email", email);
      return dispatch({
        type: SEND_EMAIL,
        payload: mail,
      });
    } catch (error) {
      console.log("Se produjo un error al enviar el correo");
    }
  };
};
