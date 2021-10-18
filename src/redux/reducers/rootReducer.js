import { combineReducers } from "redux";
import certificatesReducer from "./certificatesReducer";
import portfolioReducer from "./portfolioReducer";

const rootReducer = combineReducers({
  certificates: certificatesReducer,
  portfolio: portfolioReducer,
});

export default rootReducer;