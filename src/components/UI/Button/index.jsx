import React from "react";
import styled from "styled-components";

const ButtonElement = styled.button`
  min-width: 230px;
  height: 50px;
  padding: 0 22px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--color-button-white);
  background: var(--color-button-black);
  border-radius: 15px;
  transition: background 0.5s;
  &:hover{
    background: var(--color-button-hover-black);
  }
  &:focus{
    outline: none;
    box-shadow: 0 0 10px var(--color-button-black);
  }
`;

function Button (props) {
  return(
    <ButtonElement {...props}>
      {props.children}
    </ButtonElement>
  );
}

export default Button;