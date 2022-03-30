import React from "react";
import styled from "styled-components";

const Title = styled.h2`
  font-size: 42px;
  font-weight: 600;
  text-align: center;
  color: var(--color-black);
  @media screen and (max-width: 500px){
    font-size: 36px;
  }
`;

function FormTitle (props) {
  return(
    <Title {...props}>{props.children}</Title>
  );
}

export default FormTitle;