import { CLOSE_MENU, OPEN_MENU } from "../types";

const initialState = {
  isOpenMenu: false,
}

function menuReducer(state=initialState, {type}){
  switch (type) {
    case OPEN_MENU: {
      return {
        ...state,
        isOpenMenu: true,
      }
    } case CLOSE_MENU: {
      return {
        ...state,
        isOpenMenu: false,
      }
    } default: {
      return state;
    }
  }
}

export default menuReducer;