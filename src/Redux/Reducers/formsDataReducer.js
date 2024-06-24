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
    company_phone: '',
  },
};

export const formDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case DRIVER_FORM_DATA: {
      const {
        name,
        lastname,
        email,
        password,
        confirmPassword,
        picture,
        num_license,
        description,
        phone,
        brand,
        model,
        year,
        charge_type,
        num_plate,
        capacity,
        charge_capacity,
      } = action.payload;
      return {
        ...state,
        driverData: {
          ...state.driverData,
          name,
          lastname,
          email,
          password,
          confirmPassword,
          picture,
          num_license,
          description,
          phone,
          brand,
          model,
          year,
          charge_type,
          num_plate,
          capacity,
          charge_capacity,
        },
      };
    }
    case CLIENT_FORM_DATA: {
      const {
        name,
        lastname,
        email,
        password,
        confirmPassword,
        company_name,
        ruc,
        address,
        company_phone,
      } = action.payload;
      return {
        ...state,
        clientData: {
          ...state.clientData,
          name,
          lastname,
          email,
          password,
          confirmPassword,
          company_name,
          ruc,
          address,
          company_phone,
        },
      };
    }
    default:
      return state;
  }
};
