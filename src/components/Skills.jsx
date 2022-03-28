import React from "react";
import Section from "./UI/Section";
import Title from "../components/UI/Title";
import styled from "styled-components";
import { gap } from "../styles/mixins";

const List = styled.ul`
  max-width: 600px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-flow: column;
  ${gap("50px")}
`;
const Item = styled.li`
  display: flex;
  ${gap("30px")}
  align-items: center;
  position: relative;
  &::after{
    content: "";
    display: block;
    width: 100%;
    margin: 0 75px 0 0;
    height: 5px;
    background-color: var(--color-coral);
  }
  &::before{
    content: "";
    position: absolute;
    top: 20px;
    right: 75px;
    width: 5px;
    height: 40px;
    background-color: var(--color-coral);
  }
  &:nth-child(2n){
    &::after{
      content: "";
      position: absolute;
      top: 20px;
      left: 75px;
      width: 5px;
      height: 40px;
    }
    &::before{
      content: "";
      position: static;
      display: block;
      width: 100%;
      margin: 0 0 0 75px;
      height: 5px;
    }
    &:last-child{
      margin-left: auto;
    }
  }
  &:last-child{
    &::after{
      display: none;
    }
    &::before{
      display: none;
    }
  }
`;
const Subtitle = styled.h4`
  min-width: 150px;
  padding: 3px;
  font-size: 22px;
  font-weight: 600;
  text-align: center;
  border: 4px solid var(--color-black);
  border-radius: 10px;
`;

function Skills () {
  return(
    <>
      <Section>
        <Title>Skills</Title>
        <List>
          <Item><Subtitle>HTML</Subtitle></Item>
          <Item><Subtitle>CSS</Subtitle></Item>
          <Item><Subtitle>JavaScript</Subtitle></Item>
          <Item><Subtitle>React</Subtitle></Item>
          <Item><Subtitle>Redux</Subtitle></Item>
        </List>
      </Section>
      <Section>
        <Title>Another skills</Title>
        <List>
          <Item><Subtitle>Git</Subtitle></Item>
          <Item><Subtitle>Figma</Subtitle></Item>
          <Item><Subtitle>Python</Subtitle></Item>
        </List>
      </Section>
    </>
  );
}

export default Skills;