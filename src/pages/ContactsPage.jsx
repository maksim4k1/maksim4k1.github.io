import React, { useState } from "react";
import styled from "styled-components";
import GithubIcon from "../assets/icons/GithubIcon";
import GmailIcon from "../assets/icons/GmailIcon";
import TelegramIcon from "../assets/icons/TelegramIcon";
import WhatsappIcon from "../assets/icons/WhatsappIcon";
import AppLink from "../components/UI/AppLink";
import Section from "../components/UI/Section";
import Title from "../components/UI/Title";
import { gap } from "../styles/mixins";
import Form from "../components/UI/Form";
import FormTitle from "../components/UI/Form/FormTitle";
import Input from "../components/UI/Form/Input";
import Button from "../components/UI/Button";
import TextArea from "../components/UI/Form/TextArea";
import bgImage from "../assets/gif/typing.gif";

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
const FormTitleElement = styled(FormTitle)`
  color: var(--color-button-white);
`;

function ContactsPage () {
  const [formData, setFormData] = useState({});
  const [error, setError] = useState("");
  const link = "https://wa.me/+79836091358?text=";
  
  function onChangeHandler(event) {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
    setError("");
  }
  function handleSubmit(event) {
    event.preventDefault();

    if(formData.username && formData.message){
      window.open(link + `Здравствуйте, меня зовут ${formData.username}. ${formData.message.replace(/\n/g, " ")}`);
      setFormData({
        ...formData,
        message: ""
      });
    } else{
      setError("Заполните все поля!");
    }
  }

  return(
    <main className="content">
      <Section>
        <Title>Контакты</Title>
        <List>
          <Item><WhatsappIcon/><AppLink target="_blank" rel="noreferrer" href="https://wa.me/+79836091358">+7 983 609-13-58</AppLink></Item>
          <Item><TelegramIcon/><AppLink target="_blank" rel="noreferrer" href="https://t.me/maksim4k1">maksim4k1</AppLink></Item>
          <Item><GithubIcon/><AppLink target="_blank" rel="noreferrer" href="https://github.com/maksim4k1">maksim4k1</AppLink></Item>
          <Item><GmailIcon/><AppLink href="mailto:maksim4k1@gmail.com">maksim4k1@gmail.com</AppLink></Item>
        </List>
      </Section>
      <Section bgImage={bgImage}>
        <Form onSubmit={handleSubmit}>
          <FormTitleElement>Свяжитесь со мной!</FormTitleElement>
          <Input onChange={onChangeHandler} placeholder="Ваше имя" name="username" value={formData.username || ""}/>
          <TextArea onChange={onChangeHandler} placeholder="Текст сообщения" name="message" value={formData.message || ""}></TextArea>
          <Button type="submit">{error ? error : "Отправить"}</Button>
        </Form>
      </Section>
    </main>
  );
}

export default ContactsPage;