import { axiosInstance } from '../../axiosInstance';

export const CREATE_ORDER_PENDING = 'CREATE_ORDER_PENDING';
export const CREATE_ORDER_SUCCESS = 'CREATE_ORDER_SUCCESS';
export const CREATE_ORDER_FAILURE = 'CREATE_ORDER_FAILURE';

export const createOrder = (
  customerId,
  {
    product_name, //string
    quantity, //integer
    type, // 'Seca' | 'Peligrosa' | 'Refrigerada'
    weight, //float
    volume, //integer
    offered_price, //integer
    product_pic, //string
    orderType, //'national' | 'international'
    receiving_company, //string
    contact_number, //integer
    receiving_company_RUC, //integer
    pick_up_date, //date
    pick_up_time, //string
    pick_up_address, //string
    pick_up_city, //string
    delivery_date, //date
    delivery_time, //string
    delivery_address, //string
    delivery_city, // string
  }
) => {
  return async (dispatch) => {
    dispatch({ type: CREATE_ORDER_PENDING });
    try {
      const response = await axiosInstance.post(
        `/order/create/${customerId}`,
        {
          product_name,
          quantity,
          type,
          weight,
          volume,
          offered_price,
          product_pic,
          orderType,
          receiving_company,
          contact_number,
          receiving_company_RUC,
          pick_up_date,
          pick_up_time,
          pick_up_address,
          pick_up_city,
          delivery_date,
          delivery_time,
          delivery_address,
          delivery_city,
        }
      );
      dispatch({
        type: CREATE_ORDER_SUCCESS,
        payload: response.data,
      });
    } catch (error) {
      dispatch({ type: CREATE_ORDER_FAILURE, error: error.message });
    }
  };
};
