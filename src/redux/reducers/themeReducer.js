import { DARK_THEME, LIGHT_THEME } from "../types";

const initialState = {
  theme: localStorage.getItem("theme") || "light"
}

const themeReducer = (state=initialState, {type}) => {
  switch(type){
    case LIGHT_THEME: {
      localStorage.setItem("theme", "light");
      document.body.classList.remove("dark");
      return {
        ...state,
        theme: "light"
      };
    } case DARK_THEME: {
      localStorage.setItem("theme", "dark");
      document.body.classList.add("dark");
      return {
        ...state,
        theme: "dark"
      };
    } default: {
      return state;
    }
  }
}

export default themeReducer;