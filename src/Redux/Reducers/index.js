import { combineReducers } from 'redux';
import { userReducer } from './userReducer';
import { orderReducer } from './orderReducer';
import { feedbackReducer } from './feedbackReducer';
import { truckReducer } from './truckReducer';
import { applicationReducer } from './applicationReducer';
import { paymentReducer } from './paymentReducer';
import { formDataReducer } from './formsDataReducer';

const rootReducer = combineReducers({
  forms: formDataReducer,
  user: userReducer,
  orders: orderReducer,
  feedback: feedbackReducer,
  truck: truckReducer,
  application: applicationReducer,
  payment: paymentReducer,
});

export default rootReducer;
