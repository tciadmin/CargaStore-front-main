import { DRIVER_FORM_DATA } from '../Actions/formActions';

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
      console.log('action: ', action.payload);
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
    default:
      return state;
  }
};
