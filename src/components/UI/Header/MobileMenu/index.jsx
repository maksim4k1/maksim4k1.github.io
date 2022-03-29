import React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import MoonIcon from "../../../../assets/icons/MoonIcon";
import SunIcon from "../../../../assets/icons/SunIcon";
import { closeMenuAction } from "../../../../redux/actions/menuActions";
import { darkThemeAction, lightThemeAction } from "../../../../redux/actions/themeActions";
import { gap } from "../../../../styles/mixins";
import AppLink from "../../AppLink";

const Menu = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  left: 0;
  display: none;
  justify-content: center;
  flex-flow: column;
  background: var(--color-modal-bg);
  transition: all 0.5s;
  @media screen and (max-width: 600px){
    &{
      display: flex;
    }
  }
  z-index: 100;
`;
const Settings = styled.div`
  width: 100%;
  height: 50px;
  padding: 0 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Logo = styled(NavLink)`
  color: var(--color-modal-white);
  font-size: 30px;
  font-weight: 900;
  &:first-letter{
    color: var(--color-coral);
  }
`;
const ThemeButton = styled.button`
  width: 30px;
  height: 30px;
  &>svg{
    width: 100%;
    height: 100%;
    transition: 0.3s;
    pointer-events: none;
    fill: var(--color-modal-white)
  }
  transition: 0.5s;
  &:hover{
    &>svg{
      fill: var(--color-coral);
    }
  }
`;
const Navigation = styled.nav`
  display: flex;
  flex-flow: column;
  ${gap("30px")}
  align-items: center;
  margin: 100px auto auto;
  font-size: 28px;
  &>a{
    color: var(--color-modal-white);
  }
`;

function MobileMenu ({theme, isOpenMenu, closeMenu, lightTheme, darkTheme}) {
  function themeHandler(event){
    if(theme === "light") darkTheme();
    else lightTheme();
  }

  return(
    <Menu style={isOpenMenu ? {top: 0} : {top: "-120vh"}} onClick={closeMenu}>
      <Settings>
        <Logo to="/">MB</Logo>
        <ThemeButton onClick={themeHandler}>{theme === "dark" ? <SunIcon/> : <MoonIcon/>}</ThemeButton>
      </Settings>
      <Navigation>
        <AppLink type="navlink" to="/">Главная</AppLink>
        <AppLink type="navlink" to="/about">Обо мне</AppLink>
        <AppLink type="navlink" to="/certificates">Сертификаты</AppLink>
        <AppLink type="navlink" to="/portfolio">Портфолио</AppLink>
        <AppLink type="navlink" to="/contacts">Контакты</AppLink>
      </Navigation>
    </Menu>
  );
}

const mapStateToProps = (state) => ({
  theme: state.theme.theme,
  isOpenMenu: state.menu.isOpenMenu,
});
const mapDispatchToProps = {
  closeMenu: closeMenuAction,
  lightTheme: lightThemeAction,
  darkTheme: darkThemeAction,
}

export default connect(mapStateToProps, mapDispatchToProps)(MobileMenu);