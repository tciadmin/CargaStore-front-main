import { combineReducers } from 'redux';
import { userReducer } from './userReducer';
import { orderReducer } from './orderReducer';

const rootReducer = combineReducers({
  user: userReducer,
  orders: orderReducer,
});

export default rootReducer;
