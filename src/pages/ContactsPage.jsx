import React from "react";
import styled from "styled-components";
import GithubIcon from "../assets/icons/GithubIcon";
import GmailIcon from "../assets/icons/GmailIcon";
import InstagramIcon from "../assets/icons/InstagramIcon";
import PhoneIcon from "../assets/icons/PhoneIcon";
import TelegramIcon from "../assets/icons/TelegramIcon";
import WhatsappIcon from "../assets/icons/WhatsappIcon";
import AppLink from "../components/UI/AppLink";
import Section from "../components/UI/Section";
import Title from "../components/UI/Title";
import { gap } from "../styles/mixins";

const List = styled.ul`
  display: flex;
  flex-flow: column;
  ${gap("25px")}
`;
const Item = styled.li`
  display: flex;
  align-items: center;
  ${gap("10px")}
  font-size: 18px;
  font-weight: 600;
  &>svg{
    width: 30px;
    height: 30px;
  }
`;

function ContactsPage () {
  return(
    <main className="content">
      <Section>
        <Title>Контакты</Title>
        <List>
          <Item><PhoneIcon/><AppLink href="tel:+996709395519">+996 709 39-55-19</AppLink></Item>
          <Item><WhatsappIcon/><AppLink target="_blank" rel="noreferrer" href="https://wa.me/+996709395519">+996 709 39-55-19</AppLink></Item>
          <Item><TelegramIcon/><AppLink target="_blank" rel="noreferrer" href="https://t.me/maksim4k1">maksim4k1</AppLink></Item>
          <Item><GithubIcon/><AppLink target="_blank" rel="noreferrer" href="https://github.com/maksim4k1">maksim4k1</AppLink></Item>
          <Item><InstagramIcon/><AppLink target="_blank" rel="noreferrer" href="https://instagram.com/_maksim4k1">_maksim4k1</AppLink></Item>
          <Item><GmailIcon/><AppLink href="mailto:maksim4k1@gmail.com">maksim4k1@gmail.com</AppLink></Item>
        </List>
      </Section>
    </main>
  );
}

export default ContactsPage;