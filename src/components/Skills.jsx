import React from "react";
import Section from "./UI/Section";
import Title from "../components/UI/Title";
import styled from "styled-components";
import { gap } from "../styles/mixins";

const List = styled.ul`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  ${gap("16px", "10px")}
`;
const Item = styled.li`
  padding: 4px 10px;
  display: flex;
  ${gap("30px")}
  align-items: center;
  justify-content: center;
  font-size: 16px;
  font-weight: 600;
  border: 3px solid var(--color-black);
  border-radius: 10px;
`;

function Skills () {
  const skills = [
    "JavaScript", "React", "TypeScript", "Redux", "Next.js", "Node.js", "Redux-toolkit", "styled-components", "HTML", "CSS", "SCSS", "Git", "Figma", "CI/CD", "Docker", "Python", "FastAPI", "REST API", "SQL"
  ];
  return(
    <Section>
      <Title>Навыки</Title>
      <List>
        {skills.map((item, index) => <Item key={index}>{item}</Item>)}
      </List>
    </Section>
  );
}

export default Skills;