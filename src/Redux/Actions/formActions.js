export const DRIVER_FORM_DATA = 'DRIVER_FORM_DATA';
export const CLIENT_FORM_DATA = 'CLIENT_FORM_DATA';

export const driverFormData = (data) => {
  return { type: DRIVER_FORM_DATA, payload: data };
};

export const clientFormData = (data) => {
  console.log('formData: ', data);
  return { type: CLIENT_FORM_DATA, payload: data };
};
