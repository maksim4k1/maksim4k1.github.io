import React from "react";
import styled from "styled-components";
import GithubIcon from "../assets/icons/GithubIcon";
import GitlabIcon from "../assets/icons/GitlabIcon";
import GmailIcon from "../assets/icons/GmailIcon";
import TelegramIcon from "../assets/icons/TelegramIcon";
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
          <Item><TelegramIcon/><AppLink target="_blank" rel="noreferrer" href="https://t.me/maksim4k1">maksim4k1</AppLink></Item>
          <Item><GmailIcon/><AppLink href="mailto:maksim4k1@gmail.com">maksim4k1@gmail.com</AppLink></Item>
          <Item><GitlabIcon/><AppLink target="_blank" rel="noreferrer" href="https://gitlab.com/maksim4k1">maksim4k1</AppLink></Item>
          <Item><GithubIcon/><AppLink target="_blank" rel="noreferrer" href="https://github.com/maksim4k1">maksim4k1</AppLink></Item>
        </List>
      </Section>
    </main>
  );
}

export default ContactsPage;