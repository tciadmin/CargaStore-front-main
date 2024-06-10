import { axiosInstance } from '../axiosInstance';

//?------------------------------------------USER
export const GET_ALL_USERS = 'GET_ALL_USERS';
export const POST_USER = 'POST_USER';
export const AUTH_USER = 'AUTH_USER';
export const GET_USER = 'GET_USER';
export const PATCH_USER = 'PATCH_USER';
export const PASSWORD_RECOVERY_REQUEST = 'PASSWORD_RECOVERY_REQUEST';
export const PASSWORD_CODE_AUTH = 'PASSWORD_CODE_AUTH';
export const POST_FEEDBACK = 'POST_FEEDBACK';
//?------------------------------------------SHIPMENT
export const GET_ALL_SHIPMENTS = 'GET_ALL_SHIPMENTS';
export const POST_SHIPMENT = 'POST_SHIPMENT';
export const GET_SHIPMENT = 'GET_SHIPMENT';
//?------------------------------------------PRODUCTS
export const GET_ALL_PRODUCTS = 'GET_ALL_PRODUCTS';

export const getAllUsers = () => {
  return async (dispatch) => {
    try {
      const allUsers = await axiosInstance('/users/all');
      return dispatch({
        type: GET_ALL_USERS,
        payload: allUsers,
      });
    } catch (error) {
      console.log('Se produjo un error al buscar usuarios');
    }
  };
};

export const postUser = (user) => {
  return async (dispatch) => {
    try {
      let newUser = await axiosInstance.post('/auth/signup', user);
      const { role } = newUser;
      if (role === 'driver') {
        let driver = await axiosInstance.post(
          '/driver/create/5124',
          user
        );
        return dispatch({
          type: POST_USER,
          payload: [...newUser, driver],
        });
      } else {
        let customer = await axiosInstance.post(
          '/customer/create/7865',
          user
        );
        return dispatch({
          type: POST_USER,
          payload: [...newUser, customer],
        });
      }
    } catch (error) {
      console.log('Se produjo un error al crear al usuario');
    }
  };
};

export const authUser = (user) => {
  return async (dispatch) => {
    try {
      const auth = await axiosInstance.post('/auth/signin', user);
      return dispatch({
        type: AUTH_USER,
        payload: auth,
      });
    } catch (error) {
      console.log('Se produjo un error al iniciar sesión');
    }
  };
};

// export const patchUser = () => {
//   return async (dispatch) => {
//     try {
//     } catch (error) {
//       console.log('Se produjo un error al modificar los datos');
//     }
//   };
// };

export const recoveryPassword = (email) => {
  return async (dispatch) => {
    try {
      const request = await axiosInstance.post('/auth/signin', email);
      return dispatch({
        type: PASSWORD_RECOVERY_REQUEST,
        payload: request,
      });
    } catch (error) {
      console.log('Se produjo un error al recuperar contraseña');
    }
  };
};

export const postFeedback = (feedback) => {
  return async (dispatch) => {
    try {
      const comment = await axiosInstance.post(
        '/feedback/create',
        feedback
      );
      return dispatch({
        type: POST_FEEDBACK,
        payload: comment,
      });
    } catch (error) {
      console.log('Se produjo un error al iniciar sesión');
    }
  };
};
