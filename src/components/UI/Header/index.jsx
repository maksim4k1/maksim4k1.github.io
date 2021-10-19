import React from "react";
import styled from "styled-components";
import { gap } from "../../../styles/mixins";
import AppLink from "../AppLink";

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
`;
const Navigation = styled.nav`
  width: 100%;
  display: flex;
  ${gap("20px")}
  justify-content: space-between;
`;

function Header () {
  return(
    <HeaderElement>
      <Container className="container">
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

export default Header;