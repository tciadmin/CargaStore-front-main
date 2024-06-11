import { axiosInstance } from "../../axiosInstance";
//?------------------------------------------USER
export const GET_ALL_USERS = "GET_ALL_USERS";
export const GET_USER = "GET_USER";
export const POST_USER = "POST_USER";
export const AUTH_USER = "AUTH_USER";
export const PUT_CUSTOMER = "PUT_CUSTOMER";
export const PATCH_TRUCK = "PATCH_TRUCK";
export const PATCH_DRIVER = "PATCH_DRIVER";

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
