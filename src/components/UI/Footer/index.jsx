import React from "react";
import styled from "styled-components";
import GithubIcon from "../../../assets/icons/GithubIcon";
import TelegramIcon from "../../../assets/icons/TelegramIcon";
import WhatsappIcon from "../../../assets/icons/WhatsappIcon";
import { gap } from "../../../styles/mixins";
import AppLink from "../AppLink";
import Section from "../Section";

const FooterElement = styled.footer`
  margin: auto 0 0;
  color: var(--color-footer-white);
  background-color: var(--color-footer-black);
`;
const Title = styled.h2`
  font-size: 32px;
  font-weight: 600;
  text-align: center;
`;
const List = styled.ul`
  display: flex;
  ${gap("30px")}
  justify-content: center;
  & svg{
    width: 35px;
    height: 35px;
    &>path{
      stroke: var(--color-footer-white);
      transition: stroke 0.3s;
    }
    &>g{
      fill: var(--color-footer-white);
      transition: fill 0.3s;
    }
    @media (hover){
      &:hover>g{
        fill: var(--color-coral);
      }
      &:hover>path{
        stroke: var(--color-coral);
      }
    }
  }
`;
const Content = styled.p`
  font-weight: 500;
  text-align: center;
`;
const Navigation = styled.nav`
  display: flex;
  flex-flow: wrap;
  justify-content: center;
  ${gap("30px")}
  &>a{
    color: var(--color-footer-white);
  }
  @media screen and (max-width: 600px){
    flex-flow: column;
    ${gap("15px")}
    font-size: 14px;
    &>a{
      margin: 0 auto;
    }
    order: 1
  }
`;

function Footer () {
  return(
    <FooterElement>
      <Section id="contacts">
        <Navigation>
          <AppLink type="navlink" to="/">Главная</AppLink>
          <AppLink type="navlink" to="/about">Обо мне</AppLink>
          <AppLink type="navlink" to="/certificates">Сертификаты</AppLink>
          <AppLink type="navlink" to="/portfolio">Портфолио</AppLink>
          <AppLink type="navlink" to="/contacts">Контакты</AppLink>
        </Navigation>
        <Title>Контакты</Title>
        <List>
          <li><a target="_blank" rel="noreferrer" href="https://t.me/maksim4k1"><TelegramIcon/></a></li>
          <li><a target="_blank" rel="noreferrer" href="https://wa.me/+79836091358"><WhatsappIcon/></a></li>
          <li><a target="_blank" rel="noreferrer" href="https://github.com/maksim4k1"><GithubIcon/></a></li>
        </List>
        <Content>Вы можете связаться со мной<br/>или посмотреть на мои работы<br/>по ссылкам выше</Content>
      </Section>
    </FooterElement>
  );
}

export default Footer;