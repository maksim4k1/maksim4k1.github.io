import { combineReducers } from "redux";
import certificatesReducer from "./certificatesReducer";

const rootReducer = combineReducers({
  certificates: certificatesReducer
});

export default rootReducer;