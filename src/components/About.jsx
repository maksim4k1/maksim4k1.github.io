import React from "react";
import Section from "./UI/Section";
import Title from "../components/UI/Title";
import styled from "styled-components";
import { gap } from "../styles/mixins";

const Content = styled.div`
  display: flex;
  flex-flow: column;
  ${gap("30px")}
  font-weight: 500;
`;

function About () {
  return(
    <Section id="about">
      <Title>Обо мне</Title>
      <Content>
        <p>Здравствуйте, меня зовут Баженов Максим и мне 17 лет.</p>
        <p>Сейчас я обучаюсь в 11 классе, и увлекаюсь математикой и информатикой.</p>
        <p>В свободное время я занимаюсь программированием, в частности Front-end разработкой, так как в этом направлении присутствует всё, что мне нравится - информатика, математика и дизайн.<br/>Иногда учу и другие языки программирования, такие как Python.</p>
        <p>В будущем я планирую поступить в Российский вуз, получить профильное образование и в дальнейшем развиваться как профессионал уже в России.</p>
      </Content>
    </Section>
  );
}

export default About;