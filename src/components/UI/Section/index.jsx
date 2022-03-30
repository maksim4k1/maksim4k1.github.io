import React from "react";
import styled from "styled-components";
import { gap } from "../../../styles/mixins";

const SectionElement = styled.section`
  width: 100%;
  padding: 70px 0;
  position: relative;
  overflow: hidden;
`;
const BackgroundImage = styled.img`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  object-fit: cover;
  object-position: center;
  filter: brightness(40%);
  z-index: -10;
`;
const Container = styled.div`
  display: flex;
  flex-flow: column;
  ${gap("30px")}
`;

function Section ({children, bgImage}) {
  return(
    <SectionElement style={bgImage ? {background: "none"} : null}>
      {
        bgImage
        ? <BackgroundImage src={bgImage}/>
        : null
      }
      <Container className="container">
        {children}
      </Container>
    </SectionElement>
  );
}

export default Section;