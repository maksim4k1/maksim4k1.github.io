import React, { useEffect } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import MenuIcon from "../../../assets/icons/MenuIcon";
import SunIcon from "../../../assets/icons/SunIcon";
import MoonIcon from "../../../assets/icons/MoonIcon";
import { openMenuAction } from "../../../redux/actions/menuActions";
import { gap } from "../../../styles/mixins";
import AppLink from "../AppLink";
import MobileMenu from "./MobileMenu";
import { darkThemeAction, lightThemeAction } from "../../../redux/actions/themeActions";

const HeaderElement = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 70px;
  background: var(--color-header-white);
  border-bottom: 1px solid var(--color-gray);
  z-index: 50;
  @media screen and (max-width: 600px){
    height: 50px;
  }
`;
const Container = styled.div`
  display: flex;
  flex-flow: wrap;
  align-items: center;
  @media screen and (max-width: 600px){
    &{
      justify-content: space-between;
    }
  }
`;
const LogoContainer = styled.div`
  display: flex;
  width: 100%;
  height: 40px;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 3px;
  @media screen and (max-width: 600px){
    height: 50px;
  }
`;
const Logo = styled(NavLink)`
  color: var(--color-black);
  font-size: 30px;
  font-weight: 900;
  &:first-letter{
    color: var(--color-coral);
  }
`;
const MenuButton = styled.button`
  width: 30px;
  height: 30px;
  &>svg{
    width: 100%;
    height: 100%;
    transition: 0.3s;
    pointer-events: none;
  }
  @media screen and (min-width: 601px){
    &{
      display: none;
    }
  }
  &:hover{
    &>svg{
      fill: var(--color-coral);
    }
  }
`;
const ThemeButton = styled(MenuButton)`
  transition: 0.5s;
  @media screen and (max-width: 600px){
    &{
      display: none;
    }
  }
  @media screen and (min-width: 601px){
    &{
      display: block;
    }
  }
`;
const Navigation = styled.nav`
  width: 100%;
  display: flex;
  ${gap("20px")}
  justify-content: space-between;
  @media screen and (max-width: 600px){
    &{
      display: none;
    }
  }
`;

function Header ({theme, openMenu, lightTheme, darkTheme}) {
  useEffect(() => {
    if(theme === "light") lightTheme();
    else darkTheme();
  }, [lightTheme, darkTheme, theme]);

  function themeHandler(event){
    event.target.style = `
      transform: rotate(360deg) scale(0);
    `;

    setTimeout(() => {
      if(theme === "light") darkTheme();
      else lightTheme();

      event.target.style = `
        transform: rotate(0deg) scale(1);
      `;
    }, 500);
  }

  return(
    <HeaderElement>
      <MobileMenu/>
      <Container className="container">
        <LogoContainer>
          <Logo to="/">MB</Logo>
          <MenuButton onClick={openMenu}><MenuIcon/></MenuButton>
          <ThemeButton onClick={themeHandler}>{theme === "dark" ? <SunIcon/> : <MoonIcon/>}</ThemeButton>
        </LogoContainer>
        <Navigation>
          <AppLink type="navlink" to="/">Главная</AppLink>
          <AppLink type="navlink" to="/about">Обо мне</AppLink>
          <AppLink type="navlink" to="/certificates">Сертификаты</AppLink>
          <AppLink type="navlink" to="/portfolio">Портфолио</AppLink>
          <AppLink type="navlink" to="/contacts">Контакты</AppLink>
        </Navigation>
      </Container>
    </HeaderElement>
  );
}

const mapStateToProps = (state) => ({
  theme: state.theme.theme
});
const mapDispatchToProps = {
  openMenu: openMenuAction,
  lightTheme: lightThemeAction,
  darkTheme: darkThemeAction,
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);