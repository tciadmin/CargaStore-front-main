import { combineReducers } from 'redux';
import { userReducer } from './userReducer';
import { orderReducer } from './orderReducer';
import { feedbackReducer } from './feedbackReducer';
import { truckReducer } from './truckReducer';
import { applicationReducer } from './applicationReducer';
import { paymentReducer } from './paymentReducer';
import { formDataReducer } from './formsDataReducer';
import { chatReducer } from './chatReducer';
import { driverReducer } from './driverReducer';
import { alertReducer } from './alertReducer';

const rootReducer = combineReducers({
  alert: alertReducer,
  forms: formDataReducer,
  user: userReducer,
  driver: driverReducer,
  orders: orderReducer,
  feedback: feedbackReducer,
  truck: truckReducer,
  application: applicationReducer,
  payment: paymentReducer,
  chats: chatReducer,
});

export default rootReducer;
