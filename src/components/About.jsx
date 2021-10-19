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
        <p>Здравствуйте, меня зовут <strong>Баженов Максим</strong> и <strong>мне 17 лет</strong>.</p>
        <p>Сейчас я обучаюсь <strong>в 11 классе</strong>, и увлекаюсь математикой и информатикой.</p>
        <p>В свободное время я <strong>занимаюсь программированием</strong>, в частности <strong>Front-end</strong> разработкой, так как в этом направлении присутствует всё, что мне нравится - <strong>информатика</strong>, <strong>математика</strong> и <strong>дизайн</strong>.<br/>Иногда учу и другие языки программирования, такие как <strong>Python</strong>.</p>
        <p>В будущем я планирую поступить в Российский вуз, получить профильное образование и в дальнейшем развиваться как профессионал уже в России.</p>
      </Content>
    </Section>
  );
}

export default About;