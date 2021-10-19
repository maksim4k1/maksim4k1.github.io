import React from "react";
import styled from "styled-components";
import { gap } from "../../../styles/mixins";

const Section = styled.section`
  padding: 150px 0;
  display: flex;
  flex-flow: column;
  ${gap("20px")}
  justify-content: center;
`;
const Container = styled.div`
  display: flex;
  flex-flow: column;
  ${gap("30px")}
`;

function ErrorSection ({children}) {
  return(
    <Section className="container">
      <Container className="container">
        {children}
      </Container>
    </Section>
  );
}

export default ErrorSection;