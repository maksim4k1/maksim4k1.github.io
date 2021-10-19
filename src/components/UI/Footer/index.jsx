import React from "react";
import styled from "styled-components";
import GithubIcon from "../../../assets/icons/GithubIcon";
import InstagramIcon from "../../../assets/icons/InstagramIcon";
import PhoneIcon from "../../../assets/icons/PhoneIcon";
import TelegramIcon from "../../../assets/icons/TelegramIcon";
import WhatsappIcon from "../../../assets/icons/WhatsappIcon";
import { gap } from "../../../styles/mixins";
import Section from "../Section";

const FooterElement = styled.footer`
  color: var(--color-white);
  background-color: var(--color-black);
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
    &>g{
      fill: var(--color-white);
      transition: fill 0.3s;
    }
    @media (hover){
      &:hover>g{
        fill: var(--color-coral);
      }
    }
  }
`;
const Content = styled.p`
  font-weight: 500;
  text-align: center;
`;

function Footer () {
  return(
    <FooterElement>
      <Section id="contacts">
        <Title>Контакты</Title>
        <List>
          <li><a target="_blank" rel="noreferrer" href="https://t.me/maksim4k1"><TelegramIcon/></a></li>
          <li><a href="tel:+996709395519"><PhoneIcon/></a></li>
          <li><a target="_blank" rel="noreferrer" href="https://wa.me/+996709395519"><WhatsappIcon/></a></li>
          <li><a target="_blank" rel="noreferrer" href="https://github.com/maksim4k1"><GithubIcon/></a></li>
          <li><a target="_blank" rel="noreferrer" href="https://instagram.com/_maksim4k1"><InstagramIcon/></a></li>
        </List>
        <Content>Вы можете связаться со мной<br/>или посмотреть на мои работы<br/>по ссылкам выше</Content>
      </Section>
    </FooterElement>
  );
}

export default Footer;