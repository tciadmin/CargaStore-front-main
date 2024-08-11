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
    // product_pic, //string
    orderType, //'national' | 'international'
    receiving_company, //string
    contact_number, //integer
    receiving_company_RUC, //integer
    pick_up_date, //date
    pick_up_time, //string
    pick_up_address, //string
    // pick_up_city, //string
    delivery_date, //date
    delivery_time, //string
    delivery_address, //string
    // delivery_city, // string
    image1,
    image2,
    image3,
    image4,
  },
  navigate
) => {
  return async (dispatch) => {
    dispatch({ type: CREATE_ORDER_PENDING });
    try {
      const formData = new FormData();
      formData.append('image1', image1?.[0]);
      formData.append('image2', image2?.[0]);
      formData.append('image3', image3?.[0]);
      formData.append('image4', image4?.[0]);
      formData.append('product_name', product_name);
      formData.append('quantity', quantity);
      formData.append('type', type);
      formData.append('weight', weight);
      formData.append('volume', volume);
      formData.append('offered_price', offered_price);
      // formData.append('product_pic', product_pic);
      formData.append('orderType', orderType);
      formData.append('receiving_company', receiving_company);
      formData.append('contact_number', contact_number);
      formData.append('receiving_company_RUC', receiving_company_RUC);
      formData.append('pick_up_date', pick_up_date);
      formData.append('pick_up_time', pick_up_time);
      formData.append('pick_up_address', pick_up_address);
      // formData.append('pick_up_city', pick_up_city);
      formData.append('delivery_date', delivery_date);
      formData.append('delivery_time', delivery_time);
      formData.append('delivery_address', delivery_address);
      // formData.append('delivery_city', delivery_city);
      const response = await axiosInstance.post(
        `/order/create/${customerId}`,
        formData
      );
      dispatch({
        type: CREATE_ORDER_SUCCESS,
        payload: response.data,
      });
      navigate('/shipments');
    } catch (error) {
      console.error(error);
      dispatch({
        type: CREATE_ORDER_FAILURE,
        payload: error.response.data,
      });
    }
  };
};
