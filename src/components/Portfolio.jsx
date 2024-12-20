import React from "react";
import Section from "./UI/Section";
import Title from "../components/UI/Title";
import { connect } from "react-redux";
import List from "./UI/List";
import AppLink from "./UI/AppLink";
import { gap } from "../styles/mixins";
import styled from "styled-components";

const Content = styled.div`
  margin: 30px 0 0 0;
  display: flex;
  flex-flow: column;
  ${gap("10px")}
  color: var(--color-txt-gray);
  font-size: 14px;
  font-weight: 500;
  text-align: center;
`;

function Portfolio ({projects, projectsWithApi, quizProject, multiTaskerProject, obsudimProject}) {
  return(
    <Section>
      <Title>Портфолио</Title>
      <List list={obsudimProject}/>
      <List list={projects}/>
      <Content>
        <p>Для корректной работы следующего приложения требуется скачать локальный API по ссылке: <AppLink href="https://github.com/maksim4k1/multi-tasker-api" target="_blank" rel="noreferrer">https://github.com/maksim4k1/multi-tasker-api</AppLink>.</p>
        <p>Инструкция по запуску сервера находится по <AppLink href="https://github.com/maksim4k1/multi-tasker-api/blob/main/README.md" target="_blank" rel="noreferrer">данной ссылке</AppLink>.</p>
      </Content>
      <List list={multiTaskerProject}/>
      <Content>
        <p>Для корректной работы следующих приложений требуется скачать локальный API по ссылке: <AppLink href="https://github.com/an4morph/academy-fake-api" target="_blank" rel="noreferrer">https://github.com/an4morph/academy-fake-api</AppLink>.</p>
        <p>Инструкция по запуску сервера находится по <AppLink href="https://github.com/an4morph/academy-fake-api/blob/main/README.md" target="_blank" rel="noreferrer">данной ссылке</AppLink>.</p>
      </Content>
      <List list={projectsWithApi}/>
      <Content>
        <p>Для корректной работы следующего приложения требуется скачать локальный API по ссылке: <AppLink href="https://github.com/maksim4k1/Quiz-api" target="_blank" rel="noreferrer">https://github.com/maksim4k1/Quiz-api</AppLink>.</p>
        <p>Инструкция по запуску сервера находится по <AppLink href="https://github.com/maksim4k1/Quiz-api/blob/main/README.md" target="_blank" rel="noreferrer">данной ссылке</AppLink>.</p>
      </Content>
      <List list={quizProject}/>
    </Section>
  );
}

const stateToProps = (state) => ({
  projects: state.portfolio.projects,
  projectsWithApi: state.portfolio.projectsWithApi,
  quizProject: state.portfolio.quizProject,
  multiTaskerProject: state.portfolio.multiTaskerProject,
  obsudimProject: state.portfolio.obsudimProject,
});

export default connect(stateToProps)(Portfolio);