import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { gap } from "../../../styles/mixins";

const HeaderElement = styled.header`
  width: 100%;
  height: 50px;
  border-bottom: 1px solid var(--color-gray);
  @media screen and (max-width: 600px){
    display: none;
  }
`;
const Container = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
`;
const Navigation = styled.nav`
  width: 100%;
  display: flex;
  ${gap("20px")}
  justify-content: space-between;
`;
const Link = styled(NavLink)`
  position: relative;
  color: var(--color-black);
  font-weight: 600;
  transition: all 0.3s;
  &::after{
    content: "";
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: var(--color-coral);
    opacity: 0;
    transition: all 0.3s;
  }
  &:hover{
    color: var(--color-coral);
    &::after{
      bottom: 0;
      opacity: 1;
    }
  }
`;

function Header () {
  return(
    <HeaderElement>
      <Container className="container">
        <Navigation>
          <Link to="/">Главная</Link>
          <Link to="#about">Обо мне</Link>
          <Link to="#certificates">Сертификаты</Link>
          <Link to="#portfolio">Портфолио</Link>
          <Link to="#contacts">Контакты</Link>
        </Navigation>
      </Container>
    </HeaderElement>
  );
}

export default Header;