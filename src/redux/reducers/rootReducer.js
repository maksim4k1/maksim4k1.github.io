import { combineReducers } from "redux";
import certificatesReducer from "./certificatesReducer";
import menuReducer from "./menuReducer";
import portfolioReducer from "./portfolioReducer";

const rootReducer = combineReducers({
  certificates: certificatesReducer,
  portfolio: portfolioReducer,
  menu: menuReducer,
});

export default rootReducer;