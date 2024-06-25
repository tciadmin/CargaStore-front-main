import {
  CLIENT_FORM_DATA,
  DRIVER_FORM_DATA,
} from '../Actions/formActions';

const initialState = {
  driverData: {
    name: '',
    lastname: '',
    email: '',
    password: '',
    confirmPassword: '',
    picture: '',
    num_license: '',
    description: '',
    phone: '',
    brand: '',
    model: '',
    year: '',
    charge_type: '',
    num_plate: '',
    capacity: '',
    charge_capacity: '',
  },
  clientData: {
    name: '',
    lastname: '',
    email: '',
    password: '',
    confirmPassword: '',
    company_name: '',
    ruc: '',
    address: '',
    city: '',
    country: '',
    company_phone: '',
  },
};

export const formDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case DRIVER_FORM_DATA: {
      const updatedDriverData = {
        ...state.driverData,
        ...action.payload,
      };
      return {
        ...state,
        driverData: updatedDriverData,
      };
    }
    case CLIENT_FORM_DATA: {
      const updatedClientData = {
        ...state.clientData,
        ...action.payload,
      };
      console.log('actionPayload: ', action.payload);
      return {
        ...state,
        clientData: updatedClientData,
      };
    }
    default:
      return state;
  }
};
