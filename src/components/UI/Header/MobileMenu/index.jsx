import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { closeMenuAction } from "../../../../redux/actions/menuActions";
import { gap } from "../../../../styles/mixins";
import AppLink from "../../AppLink";

const Menu = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  left: 0;
  display: none;
  justify-content: center;
  align-items: center;
  background: var(--color-modal-bg);
  transition: all 0.5s;
  @media screen and (max-width: 600px){
    &{
      display: flex;
    }
  }
  z-index: 100;
`;
const Navigation = styled.nav`
  display: flex;
  flex-flow: column;
  ${gap("30px")}
  align-items: center;
  font-size: 28px;
  &>a{
    color: var(--color-white);
  }
`;

function MobileMenu ({isOpenMenu, closeMenu}) {
  return(
    <Menu style={isOpenMenu ? {top: 0} : {top: "-120vh"}} onClick={closeMenu}>
      <Navigation>
        <AppLink href="/">Главная</AppLink>
        <AppLink href="/#about">Обо мне</AppLink>
        <AppLink href="/#certificates">Сертификаты</AppLink>
        <AppLink href="/#portfolio">Портфолио</AppLink>
        <AppLink href="/#contacts">Контакты</AppLink>
      </Navigation>
    </Menu>
  );
}

const mapStateToProps = (state) => ({
  isOpenMenu: state.menu.isOpenMenu,
});
const mapDispatchToProps = {
  closeMenu: closeMenuAction,
}

export default connect(mapStateToProps, mapDispatchToProps)(MobileMenu);