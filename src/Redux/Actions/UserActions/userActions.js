import { axiosInstance } from '../../axiosInstance';
import Cookies from 'js-cookie';
const token = Cookies.get('token');
const headers = {
  Authorization: `Bearer ${token}`
};
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

export const PATCH_BASIC_USER_PENDING = "PATCH_BASIC_USER_PENDING";
export const PATCH_BASIC_USER_SUCCESS = "PATCH_BASIC_USER_SUCCESS";
export const PATCH_BASIC_USER_FAILURE = "PATCH_BASIC_USER_FAILURE";



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
      const user = await axiosInstance(`/auth/single_user/${id}`);
      return dispatch({
        type: GET_USER_SUCCESS,
        payload: user.data,
      });
    } catch (error) {
      dispatch({ type: GET_USER_FAILURE, error: error.message });
    }
  };
};

export const postUser = (userType, userData, navigate) => {
  // userTpe es el tipo de usuario que se creara,
  //por el momento solo puede ser 'driver' y 'customer'
  //userData es la informacion del usuario
  return async (dispatch) => {
    dispatch({ type: POST_USER_PENDING });
    console.log(userType)
    try {
      //Destructuramos los datos del usuario
      const { name, lastname, email, password, confirmPassword } =
        userData;
      const newUser = await axiosInstance.post('/auth/signup', {
        name,
        lastname,
        email,
        password,
        confirmPassword,
        role: userType
      });
      console.log(newUser)
      //Destructuramos los datos de la respuesta de newUser
      const { data } = newUser;

      if (userType === 'driver') {
        //Destructuramos los datos del conductor en caso de que
        //userType sea 'driver'
        let { brand, model, year, charge_capacity, charge_type } =
          userData;
          
        //Hacemos la peticion al endpoint de creacion de conductor
        //y le pasamos como id del usuario el de la respuesta de newUser
        const driver = await axiosInstance.post(
          `/driver/create/${data?.user.id}`,
          {
            brand,
            model,
            year:parseInt(year),
            charge_capacity,
            charge_type
          }
        );
        dispatch({
          type: POST_USER_SUCCESS,
          payload: driver.data,
        });
        navigate('/marketplace');
      } else if (userType === 'customer') {
        //Destructuramos los datos del cliente en caso de que
        //userType sea 'customer'
        const { company_name, address, city, company_phone } =
          userData;
        //Hacemos la peticion al endpoint de creacion de cliente
        //y le pasamos como id del usuario el de la respuesta de newUser
        const customer = await axiosInstance.post(
          `/customer/create/${data?.user.id}`,
          { company_name, address, city, company_phone }
        );
        console.log('customer: ', customer);
        dispatch({
          type: POST_USER_SUCCESS,
          payload: customer.data,
        });
        navigate('/shipments');
      }
    } catch (error) {
      dispatch({ type: POST_USER_FAILURE, error: error.message });
    }
  };
};

export const authUser = (user, navigate) => {
  return async (dispatch) => {
    dispatch({ type: AUTH_USER_PENDING });

    try {
      const auth = await axiosInstance.post('/auth/signin', user);
      const { data } = auth;
      dispatch({
        type: AUTH_USER_SUCCESS,
        payload: data,
      });
      Cookies.set('token', data.token, {
        expires: 1,
        secure: true,
        sameSite: 'Strict',
        path: '/'
      });
      Cookies.set('id', data.user.id, {
        expires: 1,
        secure: true,
        sameSite: 'Strict',
        path: '/'
      });
      if (data.user.role === 'driver') {
        navigate('/marketplace');
      } else if (data.user.role === 'customer') {
        navigate('/shipments');
      }else if(data.user.role === 'admin'){
        navigate("/administrador/panel")
      }
      
    } catch (error) {
      dispatch({ type: AUTH_USER_FAILURE, error: error.message });
    }
  };
};

export const patchCustomer = (id, customer) => {

  return async (dispatch) => {
    dispatch({ type: PUT_CUSTOMER_PENDING });
    try {
      await axiosInstance.put(
        `/customer/edit/${id}`,
        customer,
        {
          headers
        }
      );
      return dispatch({
        type: PUT_CUSTOMER_SUCCESS,
        payload: customer,
      });
    } catch (error) {
      dispatch({ type: PUT_CUSTOMER_FAILURE, error: error.message });
    }
  };
};

export const patchDriver = (id, driver) => {
  console.log(driver)
  return async (dispatch) => {
    dispatch({ type: PATCH_DRIVER_PENDING });
    try {
      const user = await axiosInstance.patch(
        `/driver/patch/${id}`,
        driver,{headers}
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
        truck,{headers}
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
export const patchBasicUserData = (name, lastname) => {
  return async (dispatch) => {
    dispatch({ type: PATCH_BASIC_USER_PENDING });
    try {
      const token = Cookies.get('token');
      const headers = {
        Authorization: `Bearer ${token}`
      };
      await axiosInstance.patch(
        `/users/patchDataUser`,
        { name, lastname }, { headers }

      );
      return dispatch({
        type: PATCH_BASIC_USER_SUCCESS,
        payload: {
          name,
          lastname
        },
      });
    } catch (error) {
      dispatch({ type: PATCH_BASIC_USER_FAILURE, error: error.message });
    }
  };
};
