import { axiosInstance } from "../../axiosInstance";
//?------------------------------------------USER
export const GET_ALL_USERS = "GET_ALL_USERS";
export const GET_USER = "GET_USER";
export const POST_USER = "POST_USER";
export const AUTH_USER = "AUTH_USER";
export const PUT_CUSTOMER = "PUT_CUSTOMER";
export const PATCH_TRUCK = "PATCH_TRUCK";
export const PATCH_DRIVER = "PATCH_DRIVER";
export const PASSWORD_RECOVERY_REQUEST = "PASSWORD_RECOVERY_REQUEST";
export const PASSWORD_CODE_AUTH = "PASSWORD_CODE_AUTH";
export const CHANGE_PASSWORD = "PASSWORD_CODE_AUTH";
export const POST_FEEDBACK = "POST_FEEDBACK";
export const GET_FEEDBACK = "GET_FEEDBACK";

export const getAllUsers = () => {
  return async (dispatch) => {
    try {
      const allUsers = await axiosInstance("/users/all");
      return dispatch({
        type: GET_ALL_USERS,
        payload: allUsers,
      });
    } catch (error) {
      console.log("Se produjo un error al buscar usuarios");
    }
  };
};

export const getUser = (id) => {
  return async (dispatch) => {
    try {
      const user = await axiosInstance(`/single_user/${id}`);
      return dispatch({
        type: GET_USER,
        payload: user,
      });
    } catch (error) {
      console.log("Se produjo un error al buscar usuario");
    }
  };
};

export const postUser = (id, user) => {
  return async (dispatch) => {
    try {
      let newUser = await axiosInstance.post("/auth/signup", user);
      const { role } = newUser;
      if (role === "driver") {
        let driver = await axiosInstance.post(`/driver/create/${id}`, user);
        return dispatch({
          type: POST_USER,
          payload: { ...newUser, driver },
        });
      } else {
        let customer = await axiosInstance.post(`/customer/create/${id}`, user);
        return dispatch({
          type: POST_USER,
          payload: { ...newUser, customer },
        });
      }
    } catch (error) {
      console.log("Se produjo un error al crear al usuario");
    }
  };
};

export const authUser = (user) => {
  return async (dispatch) => {
    try {
      const auth = await axiosInstance.post("/auth/signin", user);
      return dispatch({
        type: AUTH_USER,
        payload: auth,
      });
    } catch (error) {
      console.log("Se produjo un error al iniciar sesión");
    }
  };
};

export const patchCustomer = (id, customer) => {
  return async (dispatch) => {
    try {
      const user = await axiosInstance.put(`/customer/edit/${id}`, customer);
      return dispatch({
        type: PUT_CUSTOMER,
        payload: user,
      });
    } catch (error) {
      console.log("e produjo un error al modificar los datos del usuario");
    }
  };
};

export const patchDriver = (id, driver) => {
  return async (dispatch) => {
    try {
      const user = await axiosInstance.patch(`/driver/patch/${id}`, driver);
      return dispatch({
        type: PATCH_DRIVER,
        payload: user,
      });
    } catch (error) {
      console.log("Se produjo un error al modificar los datos del usuario");
    }
  };
};

export const patchTruck = (id, truck) => {
  return async (dispatch) => {
    try {
      const user = await axiosInstance.patch(`/truck/update/${id}`, truck);
      return dispatch({
        type: PATCH_TRUCK,
        payload: user,
      });
    } catch (error) {
      console.log("e produjo un error al modificar los datos del usuario");
    }
  };
};

export const recoveryPassword = (email) => {
  return async (dispatch) => {
    try {
      const request = await axiosInstance.post("/auth/signin", email);
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

export const postFeedback = (feedback) => {
  return async (dispatch) => {
    try {
      const comment = await axiosInstance.post("/feedback/create", feedback);
      return dispatch({
        type: POST_FEEDBACK,
        payload: comment,
      });
    } catch (error) {
      console.log("Se produjo un error al publicar calificación");
    }
  };
};

export const getFeedback = (id) => {
  return async (dispatch) => {
    try {
      const comment = await axiosInstance(`/feedback/get/${id}`);
      return dispatch({
        type: GET_FEEDBACK,
        payload: comment,
      });
    } catch (error) {
      console.log("Se produjo un error al buscar comentarios");
    }
  };
};
