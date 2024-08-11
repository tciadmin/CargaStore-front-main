import { axiosInstance } from '../../axiosInstance';

export const EDIT_ORDER_PENDING = 'EDIT_ORDER_PENDING';
export const EDIT_ORDER_SUCCESS = 'EDIT_ORDER_SUCCESS';
export const EDIT_ORDER_FAILURE = 'EDIT_ORDER_FAILURE';

export const editOrder = (
  orderId,
  {
    product_name,
    quantity,
    type,
    weight,
    volume,
    offered_price,
    orderType,
    receiving_company,
    contact_number,
    receiving_company_RUC,
    pick_up_date,
    pick_up_time,
    pick_up_address,
    delivery_date,
    delivery_time,
    delivery_address,
    image1,
    image2,
    image3,
    image4,
  } = {}
) => {
  return async (dispatch) => {
    dispatch({ type: EDIT_ORDER_PENDING });
    try {
      const formData = new FormData();
      formData.append('product_name', product_name);
      formData.append('quantity', quantity);
      formData.append('type', type);
      formData.append('weight', weight);
      formData.append('volume', volume);
      formData.append('offered_price', offered_price);
      formData.append('orderType', orderType);
      formData.append('receiving_company', receiving_company);
      formData.append('contact_number', contact_number);
      formData.append('receiving_company_RUC', receiving_company_RUC);
      formData.append('pick_up_date', pick_up_date);
      formData.append('pick_up_time', pick_up_time);
      formData.append('pick_up_address', pick_up_address);
      formData.append('delivery_date', delivery_date);
      formData.append('delivery_time', delivery_time);
      formData.append('delivery_address', delivery_address);
      formData.append('image1', image1?.[0]);
      formData.append('image2', image2?.[0]);
      formData.append('image3', image3?.[0]);
      formData.append('image4', image4?.[0]);
      const response = await axiosInstance.put(
        `/order/edit/${orderId}`,
        formData
      );
      dispatch({
        type: EDIT_ORDER_SUCCESS,
        payload: response.data,
      });
    } catch (error) {
      console.error(error);
      dispatch({
        type: EDIT_ORDER_FAILURE,
        error: error.response.data,
      });
    }
  };
};
