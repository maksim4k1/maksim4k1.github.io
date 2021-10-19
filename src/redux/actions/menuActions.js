import { CLOSE_MENU, OPEN_MENU } from "../types";

export function openMenuAction(){
  return {type: OPEN_MENU};
}
export function closeMenuAction(){
  return {type: CLOSE_MENU};
}