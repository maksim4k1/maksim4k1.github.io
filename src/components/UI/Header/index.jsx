import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import MenuIcon from "../../../assets/MenuIcon";
import { openMenuAction } from "../../../redux/actions/menuActions";
import { gap } from "../../../styles/mixins";
import AppLink from "../AppLink";
import MobileMenu from "./MobileMenu";

const HeaderElement = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 50px;
  background: var(--color-white);
  border-bottom: 1px solid var(--color-gray);
  z-index: 50;
`;
const Container = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  @media screen and (max-width: 600px){
    &{
      justify-content: flex-end;
    }
  }
`;
const MenuButton = styled.button`
  width: 30px;
  height: 30px;
  &>svg{
    width: 100%;
    height: 100%;
  }
  @media screen and (min-width: 600px){
    &{
      display: none;
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

function Header ({openMenu}) {
  return(
    <HeaderElement>
      <MobileMenu/>
      <Container className="container">
        <MenuButton onClick={openMenu}><MenuIcon/></MenuButton>
        <Navigation>
          <AppLink href="/">Главная</AppLink>
          <AppLink href="/#about">Обо мне</AppLink>
          <AppLink href="/#certificates">Сертификаты</AppLink>
          <AppLink href="/#portfolio">Портфолио</AppLink>
          <AppLink href="/#contacts">Контакты</AppLink>
        </Navigation>
      </Container>
    </HeaderElement>
  );
}

const mapDispatchToProps = {
  openMenu: openMenuAction,
}

export default connect(null, mapDispatchToProps)(Header);