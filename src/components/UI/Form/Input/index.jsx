import React from "react";
import styled from "styled-components";

const InputElement = styled.input`
  width: 100%;
  height: 50px;
  padding: 0 22px;
  font-weight: 500;
  background: var(--color-white);
  border: 1px solid var(--color-gray);
  border-radius: 15px;
  &::placeholder{
    color: var(--color-txt-gray);
  }
  &:focus{
    outline: none;
    box-shadow: 0 0 10px var(--color-gray);
  }
`;

function Input (props) {
  return(
    <InputElement {...props}/>
  );
}

export default Input;