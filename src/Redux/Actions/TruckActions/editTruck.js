import { axiosInstance } from '../../axiosInstance';

export const EDIT_TRUCK_PENDING = 'EDIT_TRUCK_PENDING';
export const EDIT_TRUCK_SUCCESS = 'EDIT_TRUCK_SUCCESS';
export const EDIT_TRUCK_FAILURE = 'EDIT_TRUCK_FAILURE';

export const editTruck = (
  userId,
  {
    brand,
    model,
    year,
    charge_type,
    num_plate,
    charge_capacity,
  }
) => {
  return async (dispatch) => {
    dispatch({ type: EDIT_TRUCK_PENDING });
    try {
      const response = await axiosInstance.patch(
        `/truck/update/${userId}`,
        {
          brand,
          model,
          year,
          charge_type,
          num_plate,
          charge_capacity,
        }
      );
      dispatch({ type: EDIT_TRUCK_SUCCESS, payload: response.data });
    } catch (error) {
      dispatch({ type: EDIT_TRUCK_FAILURE, error: error.message });
    }
  };
};
