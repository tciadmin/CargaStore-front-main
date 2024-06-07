import axios from "axios";
//?------------------------------------------USER
export const GET_ALL_USERS = "GET_ALL_USERS";
export const POST_USER = "POST_USER";
export const POST_CUSTOMER = "POST_CUSTOMER";
export const POST_DRIVER = "POST_DRIVER";
export const AUTH_USER = "AUTH_USER";
export const GET_USER = "GET_USER";
export const PATCH_USER = "PATCH_USER";
//?------------------------------------------SHIPMENT
export const GET_ALL_SHIPMENTS = "GET_ALL_SHIPMENTS";
export const POST_SHIPMENT = "POST_SHIPMENT";
export const GET_SHIPMENT = "GET_SHIPMENT";
//?------------------------------------------PRODUCTS
export const GET_ALL_PRODUCTS = "GET_ALL_PRODUCTS";

export const getAllUsers = () => {
  return async (dispatch) => {
    try {
      const allUsers = await axios("http://localhost:3000/api/users/all");
      return dispatch({
        type: GET_ALL_USERS,
        payload: allUsers,
      });
    } catch (error) {
      console.log("Se produjo un error al buscar usuarios");
    }
  };
};

export const postUser = (user) => {
  return async (dispatch) => {
    try {
      let newUser = await axios.post(
        "http://localhost:3000/api/auth/signup",
        user
      );

      return dispatch({
        type: POST_USER,
        payload: newUser,
      });
    } catch (error) {
      console.log("Se produjo un error al crear al usuario");
    }
  };
};

export const postCustomer = (user) => {
  return async (dispatch) => {
    try {
      let customer = await axios.post(
        "http://localhost:3000/api/customer/create/7865",
        user
      );
      return dispatch({
        type: POST_CUSTOMER,
        payload: customer,
      });
    } catch (error) {
      console.log("Se produjo un error al crear al usuario");
    }
  };
};

export const postDiver = (user) => {
  return async (dispatch) => {
    try {
      let driver = await axios.post(
        "http://localhost:3000/api/driver/create/5124",
        user
      );

      return dispatch({
        type: POST_DRIVER,
        payload: driver,
      });
    } catch (error) {
      console.log("Se produjo un error al crear al usuario");
    }
  };
};

export const authUser = (user) => {
  return async (dispatch) => {
    try {
      const auth = await axios("http://localhost:3000/api/auth/signin", user);
      return dispatch({
        type: AUTH_USER,
        payload: auth,
      });
    } catch (error) {
      console.log("Se produjo un error al iniciar sesión");
    }
  };
};
