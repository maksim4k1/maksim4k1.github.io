import React from "react";
import styled from "styled-components";
import { gap } from "../styles/mixins";
import Section from "./UI/Section";

const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-flow: wrap;
  ${gap("30px")}
  @media screen and (max-width: 520px){
    flex-flow: column;
    ${gap("20px")}
    align-items: flex-start;
  }
`;
const Title = styled.h1`
  font-size: 52px;
  font-weight: 600;
  text-transform: capitalize;
  &:first-letter{
    color: var(--color-coral);
  }
  @media screen and (max-width: 520px){
    font-size: 42px;
    margin: 0 auto;
    text-align: center;
  }
`;
const ShortInfo = styled.div`
  display: flex;
  flex-flow: column;
  ${gap("10px")}
  font-weight: 500;
  text-align: end;
  @media screen and (max-width: 520px){
    margin: 0 auto;
    ${gap("5px")}
    order: 1;
    text-align: center;
  }
`;
const Image = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
  border-radius: 10px;
  @media screen and (max-width: 520px){
    max-width: 350px;
    margin: 0 auto
  }
`;

function Home () {
  return(
    <Section>
      <Content>
        <Title>Максим<br/>Баженов</Title>
        <ShortInfo>
          <p>Я начинающий<br/>Front-end разработчик</p>
          <p>Мне 17 лет</p>
          <p>Проживаю в Бишкеке</p>
        </ShortInfo>
        <Image src="https://i.stack.imgur.com/y9DpT.jpg"/>
      </Content>
    </Section>
  );
}

export default Home;