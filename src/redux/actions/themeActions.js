import { DARK_THEME, LIGHT_THEME } from "../types";

export function lightThemeAction() {
  return {type: LIGHT_THEME}
}
export function darkThemeAction() {
  return {type: DARK_THEME}
}