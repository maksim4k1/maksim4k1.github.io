import React from "react";
import styled from "styled-components";

const Title = styled.h1`
  font-size: 60px;
  font-weight: 600;
`;

function ErrorTitle ({children}) {
  return(
    <Title>
      {children}
    </Title>
  );
}

export default ErrorTitle;