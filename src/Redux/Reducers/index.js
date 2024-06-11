import { combineReducers } from "redux";
import { userReducer } from "./userReducer";
import { orderReducer } from "./orderReducer";
import { feedbackReducer } from "./feedbackReducer";

const rootReducer = combineReducers({
  user: userReducer,
  orders: orderReducer,
  feedback: feedbackReducer,
});

export default rootReducer;
