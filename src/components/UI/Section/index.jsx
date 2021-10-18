import React from "react";
import styled from "styled-components";
import { gap } from "../../../styles/mixins";

const SectionElement = styled.section`
  width: 100%;
  padding: 70px 0;
`;
const Container = styled.div`
  display: flex;
  flex-flow: column;
  ${gap("30px")}
`;

function Section ({children, id}) {
  return(
    <SectionElement id={id}>
      <Container className="container">
        {children}
      </Container>
    </SectionElement>
  );
}

export default Section;