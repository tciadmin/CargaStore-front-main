import { axiosInstance } from '../../axiosInstance';

export const EDIT_TRUCK_PENDING = 'EDIT_TRUCK_PENDING';
export const EDIT_TRUCK_SUCCESS = 'EDIT_TRUCK_SUCCESS';
export const EDIT_TRUCK_FAILURE = 'EDIT_TRUCK_FAILURE';

export const editTruck = (
  userId,
  {
    brand,
    model,
    vehicle_type,
    year,
    charge_type,
    num_plate,
    charge_capacity,
    hasGps,
    truckImage,
    plateImage,
  }
) => {
  return async (dispatch) => {
    dispatch({ type: EDIT_TRUCK_PENDING });

    const formData = new FormData();
    formData.append('brand', brand);
    formData.append('model', model);
    formData.append('vehicle_type', 'Camión');  // Si este campo no se cambia, puedes asignarlo directamente
    formData.append('year', year);
    formData.append('charge_type', charge_type);
    formData.append('num_plate', num_plate);
    formData.append('charge_capacity', charge_capacity);
    formData.append('hasGps', hasGps);

    // Si las imágenes están presentes, agrégalas al FormData
    if (truckImage) {
      formData.append('truckImage', truckImage); // Nombre del campo: 'truckImage'
    }
    if (plateImage) {
      formData.append('plateImage', plateImage); // Nombre del campo: 'plateImage'
    }

    try {
      const response = await axiosInstance.patch(
        `/truck/update/${userId}`,
        formData, 
        { headers: { 'Content-Type': 'multipart/form-data' } }  // Necesitamos agregar este header para enviar el FormData correctamente
      );
      dispatch({ type: EDIT_TRUCK_SUCCESS, payload: response.data });
    } catch (error) {
      dispatch({ type: EDIT_TRUCK_FAILURE, error: error.message });
    }
  };
};
