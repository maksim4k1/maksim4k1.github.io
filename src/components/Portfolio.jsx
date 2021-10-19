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

function Portfolio ({projects, projectsWithApi}) {
  return(
    <Section>
      <Title>Портфолио</Title>
      <List list={projects}/>
      <Content>
        <p>Для корректной работы следующих приложений требуется скачать локальный API по этой ссылке: <AppLink href="https://github.com/an4morph/academy-fake-api" target="_blank" rel="noreferrer">https://github.com/an4morph/academy-fake-api</AppLink>.</p>
        <p>Инструкция по скачиванию и запуску находится по <AppLink href="https://github.com/an4morph/academy-fake-api/blob/main/README.md" target="_blank" rel="noreferrer">ссылке</AppLink>.</p>
      </Content>
      <List list={projectsWithApi}/>
    </Section>
  );
}

const stateToProps = (state) => ({
  projects: state.portfolio.projects,
  projectsWithApi: state.portfolio.projectsWithApi,
});

export default connect(stateToProps)(Portfolio);