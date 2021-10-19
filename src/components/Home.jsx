import React from "react";
import styled from "styled-components";
import { gap } from "../styles/mixins";
import Section from "./UI/Section";
import myphoto from "../assets/png/me.jpeg";

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
  @media screen and (max-width: 540px){
    font-size: 48px;
  }
  @media screen and (max-width: 520px){
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
  object-position: center -80px;
  border-radius: 10px;
  @media screen and (max-width: 550px){
    object-position: top;
  }
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
          <p>Я начинающий<br/><strong>Front-end</strong> разработчик</p>
          <p>Мне <strong>17</strong> лет</p>
          <p>И я проживаю в <strong>Бишкеке</strong></p>
        </ShortInfo>
        <Image src={myphoto}/>
      </Content>
    </Section>
  );
}

export default Home;