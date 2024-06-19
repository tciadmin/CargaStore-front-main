export const DRIVER_FORM_DATA = 'DRIVER_FORM_DATA';

export const driverFormData = (data) => {
  console.log('driverFormData ejecutado');
  return { type: DRIVER_FORM_DATA, payload: data };
};
