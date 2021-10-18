import React from "react";
import styled from "styled-components";
import { gap } from "../styles/mixins";
import Section from "./UI/Section";

const Container = styled.div`
  display: flex;
  flex-flow: column;
  ${gap("30px")}
`;
const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${gap("20px")}
`;
const Title = styled.h1`
  font-size: 52px;
  font-weight: 600;
  text-transform: capitalize;
  &:first-letter{
    color: var(--color-coral);
  }
`;
const ShortInfo = styled.div`
  display: flex;
  flex-flow: column;
  ${gap("10px")}
  font-weight: 600;
  text-align: end;
`;
const Image = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
`;

function Home () {
  return(
    <Section>
      <Container className="container">
        <Content>
          <Title>Максим<br/>Баженов</Title>
          <ShortInfo>
            <p>Я начинающий<br/>Front-end разработчик</p>
            <p>Мне 17 лет</p>
            <p>Проживаю в Бишкеке</p>
          </ShortInfo>
        </Content>
        <Image src="https://i.stack.imgur.com/y9DpT.jpg"/>
      </Container>
    </Section>
  );
}

export default Home;