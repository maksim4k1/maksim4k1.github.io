import React from "react";
import styled from "styled-components";

const TextAreaElement = styled.textarea`
  width: 100%;
  height: 120px;
  padding: 16px 22px;
  font-weight: 500;
  background: var(--color-white);
  border: 1px solid var(--color-gray);
  border-radius: 15px;
  resize: none;
  &::placeholder{
    color: var(--color-txt-gray);
  }
  &:focus{
    outline: none;
    box-shadow: 0 0 10px var(--color-gray);
  }
`;

function TextArea (props) {
  return(
    <TextAreaElement {...props}></TextAreaElement>
  );
}

export default TextArea;