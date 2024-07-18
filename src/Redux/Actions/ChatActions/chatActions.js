import { axiosInstance } from '../../axiosInstance';
import Cookies from 'js-cookie';
const token = Cookies.get('token');
const headers = {
  Authorization: `Bearer ${token}`,
};
//?------------------------------------------USER
export const GET_ALL_CHAT_PENDING = 'GET_ALL_CHAT_PENDING';
export const GET_ALL_CHAT_SUCCESS = 'GET_ALL_CHAT_SUCCESS';
export const GET_ALL_CHAT_FAILURE = 'GET_ALL_CHAT_FAILURE';

export const GET_ALL_MESSAGES_PENDING = 'GET_ALL_MESSAGES_PENDING';
export const GET_ALL_MESSAGES_SUCCESS = 'GET_ALL_MESSAGES_SUCCESS';
export const GET_ALL_MESSAGES_FAILURE = 'GET_ALL_MESSAGES_FAILURE';

export const GET_LAST_MESSAGE_PENDING = 'GET_LAST_MESSAGE_PENDING';
export const GET_LAST_MESSAGE_SUCCESS = 'GET_LAST_MESSAGE_SUCCESS';
export const GET_LAST_MESSAGE_FAILURE = 'GET_LAST_MESSAGE_FAILURE';

export const POST_CHAT_PENDING = 'POST_CHAT_PENDING';
export const POST_CHAT_SUCCESS = 'POST_CHAT_SUCCESS';
export const POST_CHAT_FAILURE = 'POST_CHAT_FAILURE';

export const POST_MESSAGE_PENDING = 'POST_MESSAGE_PENDING';
export const POST_MESSAGE_SUCCESS = 'POST_MESSAGE_SUCCESS';
export const POST_MESSAGE_FAILURE = 'POST_MESSAGE_FAILURE';




export const getAllChats = () => {
  return async (dispatch) => {
    dispatch({ type: GET_ALL_CHAT_PENDING });
    try {
      const allMessages = await axiosInstance.get('/chat/getAll',{headers});
      return dispatch({
        type: GET_ALL_CHAT_SUCCESS,
        payload: allMessages.data,
      });
    } catch (error) {
      dispatch({ type: GET_ALL_CHAT_FAILURE, error: error.message });
    }
  };
};
export const getAllMessages = (chatID) => {
  return async (dispatch) => {
    dispatch({ type: GET_ALL_MESSAGES_PENDING });
    try {
    
      const allMessages = await axiosInstance.get('/message/getAll/'+chatID,{headers});
      return dispatch({
        type: GET_ALL_MESSAGES_SUCCESS,
        payload: allMessages.data,
      });
    } catch (error) {
      dispatch({ type: GET_ALL_MESSAGES_FAILURE, error: error.message });
    }
  };
};

export const getUser = (id) => {
  console.log('getUser ejecutado');
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
    console.log(userType);
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
        role: userType,
      });
      console.log(newUser);
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
            year: parseInt(year),
            charge_capacity,
            charge_type,
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
        path: '/',
      });
      Cookies.set('id', data.user.id, {
        expires: 1,
        secure: true,
        sameSite: 'Strict',
        path: '/',
      });
      if (data.user.role === 'driver') {
        Cookies.set('driverId', data.user.driver.id);
        navigate('/marketplace');
      } else if (data.user.role === 'customer') {
        Cookies.set('customerId', data.user.customer.id);
        navigate('/shipments');
      } else if (data.user.role === 'admin') {
        navigate('/administrador/panel');
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
      await axiosInstance.put(`/customer/edit/${id}`, customer, {
        headers,
      });
      return dispatch({
        type: PUT_CUSTOMER_SUCCESS,
        payload: customer,
      });
    } catch (error) {
      dispatch({ type: PUT_CUSTOMER_FAILURE, error: error.message });
    }
  };
};

export const patchDriver = (id, datos) => {
  return async (dispatch) => {
    dispatch({ type: PATCH_DRIVER_PENDING });
    const driver = {
      name: datos.name,
      lastname: datos.lastname,
      description: datos.driver.description,
      phone: datos.driver.phone,
    };
    try {
      const user = await axiosInstance.patch(
        `/driver/patch/${id}`,
        driver,
        { headers }
      );
      return dispatch({
        type: PATCH_DRIVER_SUCCESS,
        payload: data,
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
        truck,
        { headers }
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
        Authorization: `Bearer ${token}`,
      };
      await axiosInstance.patch(
        `/users/patchDataUser`,
        { name, lastname },
        { headers }
      );
      return dispatch({
        type: PATCH_BASIC_USER_SUCCESS,
        payload: {
          name,
          lastname,
        },
      });
    } catch (error) {
      dispatch({
        type: PATCH_BASIC_USER_FAILURE,
        error: error.message,
      });
    }
  };
};
