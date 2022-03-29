import { combineReducers } from "redux";
import certificatesReducer from "./certificatesReducer";
import menuReducer from "./menuReducer";
import portfolioReducer from "./portfolioReducer";
import themeReducer from "./themeReducer";

const rootReducer = combineReducers({
  certificates: certificatesReducer,
  portfolio: portfolioReducer,
  menu: menuReducer,
  theme: themeReducer
});

export default rootReducer;