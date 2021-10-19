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

function ErrorSection ({children}) {
  return(
    <Section className="container">
      {children}
    </Section>
  );
}

export default ErrorSection;