import React from "react";
import styled from "styled-components";
import { gap } from "../styles/mixins";
import Section from "./UI/Section";
import myphoto from "../assets/png/me.jpg";
/* Влад тут был */
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
const ImageContainer = styled.div`
  width: 100%;
  height: 375px;
  position: relative;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 0 15px var(--color-shadow-black) inset;
  @media screen and (max-width: 550px){
    height: 300px;
  }
  @media screen and (max-width: 520px){
    max-width: 350px;
    margin: 0 auto;
  }
`;
const BackgroundImage = styled.img`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  object-fit: cover;
  filter: blur(5px) brightness(70%);
  z-index: -1;
  @media screen and (max-width: 520px){
    display: none;
  }
`;
const Image = styled.img`
  width: 100%;
  height: 180%;
  object-fit: contain;
  object-position: center -50px;
  @media screen and (max-width: 520px){
    object-fit: cover;
  }
`;

function Home ({image}) {
  return(
    <Section>
      <Content>
        <Title>Максим<br/>Баженов</Title>
        <ShortInfo>
          <p>Я начинающий<br/><strong>Front-end</strong> разработчик</p>
          <p>Мне <strong>17</strong> лет</p>
          <p>И я проживаю в <strong>Бишкеке</strong></p>
        </ShortInfo>
        {
          image
          ? <ImageContainer>
            <Image src={myphoto}/>
            <BackgroundImage src={myphoto}/>
          </ImageContainer>
          : null
        }
      </Content>
    </Section>
  );
}

export default Home;