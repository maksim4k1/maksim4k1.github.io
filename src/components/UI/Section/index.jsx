import React from "react";
import styled from "styled-components";

const SectionElement = styled.section`
  width: 100%;
  padding: 70px 0;
`;

function Section ({children, id}) {
  return(
    <SectionElement id={id}>
      {children}
    </SectionElement>
  );
}

export default Section;