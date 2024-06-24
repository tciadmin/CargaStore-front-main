import { axiosInstance } from '../../axiosInstance';
//?------------------------------------------USER
export const GET_ALL_USERS_PENDING = 'GET_ALL_USERS_PENDING';
export const GET_ALL_USERS_SUCCESS = 'GET_ALL_USERS_SUCCESS';
export const GET_ALL_USERS_FAILURE = 'GET_ALL_USERS_FAILURE';

export const GET_USER_PENDING = 'GET_USER_PENDING';
export const GET_USER_SUCCESS = 'GET_USER_SUCCESS';
export const GET_USER_FAILURE = 'GET_USER_FAILURE';

export const POST_USER_PENDING = 'POST_USER_PENDING';
export const POST_USER_SUCCESS = 'POST_USER_SUCCESS';
export const POST_USER_FAILURE = 'POST_USER_FAILURE';

export const AUTH_USER_PENDING = 'AUTH_USERR_PENDING';
export const AUTH_USER_SUCCESS = 'AUTH_USER_SUCCESS';
export const AUTH_USER_FAILURE = 'AUTH_USER_FAILURE';

export const PUT_CUSTOMER_PENDING = 'PUT_CUSTOMER_PENDING';
export const PUT_CUSTOMER_SUCCESS = 'PUT_CUSTOMER_SUCCESS';
export const PUT_CUSTOMER_FAILURE = 'PUT_CUSTOMER_FAILURE';

export const PATCH_TRUCK_PENDING = 'PATCH_TRUCK_PENDING';
export const PATCH_TRUCK_SUCCESS = 'PATCH_TRUCK_SUCCESS';
export const PATCH_TRUCK_FAILURE = 'PATCH_TRUCK_FAILURE';

export const PATCH_DRIVER_PENDING = 'PATCH_DRIVER_PENDING';
export const PATCH_DRIVER_SUCCESS = 'PATCH_DRIVER_SUCCESS';
export const PATCH_DRIVER_FAILURE = 'PATCH_DRIVER_FAILURE';

export const getAllUsers = () => {
  return async (dispatch) => {
    dispatch({ type: GET_ALL_USERS_PENDING });
    try {
      const allUsers = await axiosInstance('/users/all');
      return dispatch({
        type: GET_ALL_USERS_SUCCESS,
        payload: allUsers,
      });
    } catch (error) {
      dispatch({ type: GET_ALL_USERS_FAILURE, error: error.message });
    }
  };
};

export const getUser = (id) => {
  return async (dispatch) => {
    dispatch({ type: GET_USER_PENDING });
    try {
      const user = await axiosInstance(`/single_user/${id}`);
      return dispatch({
        type: GET_USER_SUCCESS,
        payload: user,
      });
    } catch (error) {
      dispatch({ type: GET_USER_FAILURE, error: error.message });
    }
  };
};

export const postUser = (userType, data) => {
  console.log('data: ', data);
  return async (dispatch) => {
    dispatch({ type: POST_USER_PENDING });

    try {
      const { name, lastname, email, password, confirmPassword } =
        data;
      const newUser = await axiosInstance.post('/auth/signup', {
        name,
        lastname,
        email,
        password,
        confirmPassword,
      });
      if (userType === 'driver') {
        const driver = await axiosInstance.post(
          `/driver/create/${newUser?.user.id}`,
          user
        );
        return dispatch({
          type: POST_USER_SUCCESS,
          payload: { ...newUser, driver },
        });
      }
      if (userType === 'customer') {
        const { company_name, address, city, company_phone } = data;
        const customer = await axiosInstance.post(
          `/customer/create/${newUser?.user.id}`,
          { company_name, address, city, company_phone },
          user
        );
        return dispatch({
          type: POST_USER_SUCCESS,
          payload: { ...newUser, customer },
        });
      }
    } catch (error) {
      dispatch({ type: POST_USER_FAILURE, error: error.message });
    }
  };
};

export const authUser = (user) => {
  return async (dispatch) => {
    dispatch({ type: AUTH_USER_PENDING });

    try {
      const auth = await axiosInstance.post('/auth/signin', user);
      return dispatch({
        type: AUTH_USER_SUCCESS,
        payload: auth,
      });
    } catch (error) {
      dispatch({ type: AUTH_USER_FAILURE, error: error.message });
    }
  };
};

export const patchCustomer = (id, customer) => {
  return async (dispatch) => {
    dispatch({ type: PUT_CUSTOMER_PENDING });
    try {
      const user = await axiosInstance.put(
        `/customer/edit/${id}`,
        customer
      );
      return dispatch({
        type: PUT_CUSTOMER_SUCCESS,
        payload: user,
      });
    } catch (error) {
      dispatch({ type: PUT_CUSTOMER_FAILURE, error: error.message });
    }
  };
};

export const patchDriver = (id, driver) => {
  return async (dispatch) => {
    dispatch({ type: PATCH_DRIVER_PENDING });
    try {
      const user = await axiosInstance.patch(
        `/driver/patch/${id}`,
        driver
      );
      return dispatch({
        type: PATCH_DRIVER_SUCCESS,
        payload: user,
      });
    } catch (error) {
      dispatch({ type: PATCH_DRIVER_FAILURE, error: error.message });
    }
  };
};

export const patchTruck = (id, truck) => {
  return async (dispatch) => {
    dispatch({ type: PATCH_TRUCK_PENDING });
    try {
      const user = await axiosInstance.patch(
        `/truck/update/${id}`,
        truck
      );
      return dispatch({
        type: PATCH_TRUCK_SUCCESS,
        payload: user,
      });
    } catch (error) {
      dispatch({ type: PATCH_TRUCK_FAILURE, error: error.message });
    }
  };
};
