import React from "react";
import styled from "styled-components";
import { gap } from "../../../styles/mixins";

const HeaderElement = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 50px;
  background: var(--color-white);
  border-bottom: 1px solid var(--color-gray);
  z-index: 50;
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
const Link = styled.a`
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
          <Link href="/">Главная</Link>
          <Link href="#about">Обо мне</Link>
          <Link href="#certificates">Сертификаты</Link>
          <Link href="#portfolio">Портфолио</Link>
          <Link href="#contacts">Контакты</Link>
        </Navigation>
      </Container>
    </HeaderElement>
  );
}

export default Header;