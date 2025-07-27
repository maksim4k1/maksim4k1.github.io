import React from "react";
import Section from "./UI/Section";
import Title from "../components/UI/Title";
import styled from "styled-components";
import { gap } from "../styles/mixins";
import AppLink from "./UI/AppLink";
import Skills from "./Skills";

const Content = styled.div`
  display: flex;
  flex-flow: column;
  ${gap("30px")}
  font-weight: 500;
`;
const Date = styled.div`
  margin-bottom: -20px;
  font-weight: 600;
`;

function About () {
  return(
    <>
      <Section>
        <Title>Опыт работы</Title>
        <Content>
          <Date><strong>—</strong> июль 2024 - октябрь 2024</Date>
          <p>Проходил стажировку в Яндексе, где разрабатывал Frontend часть для сервиса Яндекс.ОФД, в частности верстал мобильную версию сервиса, настраивал PWA, обновлял библиотеки, фиксил баги, а также создавал новые и улучшал имеющиеся функции.</p>
        </Content>
      </Section>
      <Section>
        <Title>Образование, курсы</Title>
        <Content>
          <Date><strong>—</strong> 2022 - 2026</Date>
          <p>
            Томский государственный университет систем управления и радиоэлектроники (ТУСУР), Томск. Факультет систем управления, Программное обеспечение вычислительной техники и автоматизированных систем.
          </p>
        </Content>
        <Content>
          <Date><strong>—</strong> 2021</Date>
          <p>Front-end разработка на React, IT-Academy</p>
        </Content>
        <Content>
          <Date><strong>—</strong> 2024</Date>
          <p>Front-end разработка, ИТ-Академия, ТУСУР</p>
        </Content>
      </Section>
      <Skills/>
      <Section>
        <Title>О себе</Title>
        <Content>
          <p>
            <strong>—</strong> В данный момент участвую в разработке веб-приложения для сопровождения психотерапии и самостоятельной проработки психологических проблем пользователя "Одеяло", которое содержит: психологические тесты, статьи, упражнения<br/>
            <br/><br/>
            Роль в проекте: Lead Frontend-разработчик<br/>
            Технологии: Next.js, React, TypeScript, Redux-toolkit, RTK Query, SCSS-modules, Formik<br/>
            <br/>
            1. Реализовал аутентификацию и авторизацию🔐<br/>
            2. Связал приложение с API, используя RTK Query🔗<br/>
            3. Создал прослойку BFF между клиентом и сервером🧑‍💻🔄<br/>
            4. Добавил адаптивную верстку📱💻<br/>
            5. Использовал Docker, docker-compose для развертывания проекта🐳<br/>
            6. Настроил CI/CD в проекте с помощью GitLab🚀🔧<br/>
            7. Запустил приложение на облачном сервере, настроил домен, SSL-сертификаты и их автоматическое обновление☁️🌐🔒<br/>
            <br/>
            Сайт: <AppLink href={"https://психолог.демо-стенд.рф/"}>https://психолог.демо-стенд.рф/</AppLink><br/>
            GitLab: <AppLink href={"https://gitlab.com/maksim4k1/odeyalo"}>https://gitlab.com/maksim4k1/odeyalo</AppLink>
          </p>
          <p><strong>—</strong> В марте 2024 года участвовал в хакатоне “Молодая IT-Магистраль”, где с командой разработал веб-сервис, позволяющий создавать формы для организации опросов пользователей, который стал лучшим проектом по итогам хакатона.</p>
          <p><strong>—</strong> Ответственен и организован. Быстро учусь и адаптируюсь под новые условия. Хочу продвигаться и развивать свои навыки в направлении Frontend-разработки и проектирования программного обеспечения.</p>
        </Content>
      </Section>
    </>
  );
}

export default About;