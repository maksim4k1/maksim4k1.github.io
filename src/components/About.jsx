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
    <Section>
      <Title>Обо мне</Title>
      <Content>
        <p>Здравствуйте, меня зовут <strong>Баженов Максим</strong> и <strong>мне 18 лет</strong>.</p>
        <p>Я обучаюсь в Томском государственном университете систем управления и радиоэлектроники (<strong>ТУСУР</strong>) по направлению <strong>Программная инженерия</strong>.</p>
        <p>В свободное время <strong>занимаюсь программированием</strong>, в частности <strong>Front-end</strong> разработкой, так как во Фронте присутствуют все интересующие меня направления - <strong>IT</strong>, <strong>математика</strong> и <strong>дизайн</strong>.</p>
        <p>Я увлекаюсь программированием с лета 2020 года, и за это время успел попробовать несколько направлений: <strong>разработка игр</strong>, <strong>Back-end</strong> разработка, разработка на <strong>Python</strong> и <strong>Front-end</strong> разработка. Во время обучения я изучил такие языки программирования как <strong>JavaScript</strong>, <strong>Python</strong>, <strong>HTML</strong> и <strong>CSS</strong>, а также фреймворк <strong>React JS</strong>.</p>
        <p>Помимо продвижения в разработке я также овладел базовыми знаниями в <strong>дизайне</strong> и научился работать с приложениями <strong>Figma</strong> и <strong>Adobe Photoshop</strong>. Параллельно с этим я также приобрел некоторые знания в <strong>3D моделировании</strong> в программах <strong>Blender</strong> и <strong>3DS MAX</strong>.</p>
        <p>В <strong>декабре 2021</strong> с отличием закончил курс <strong>Front-end разработки</strong>, на котором создал много учебных проектов. После окончания курса увлёкся олимпиадным программированием, благодаря чему в совершенстве овладел языком программирования <strong>Python</strong>.</p>
        <p>В будущем я планирую поступить в Российский ВУЗ, получить профессиональное образование и в дальнейшем развиваться как специалист уже в России.</p>
      </Content>
    </Section>
  );
}

export default About;