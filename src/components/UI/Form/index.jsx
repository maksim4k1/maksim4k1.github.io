import React from "react";
import styled from "styled-components";
import { gap } from "../../../styles/mixins";

const FormElement = styled.form`
  display: flex;
  flex-flow: column;
  align-items: center;
  ${gap("30px")}
`;
const FormContainer = styled.div`
  max-width: 500px;
  width: 100%;
  margin: 0 auto
`;

function Form ({children}) {
  return(
    <FormContainer>
      <FormElement>
        {children}
      </FormElement>
    </FormContainer>
  );
}

export default Form;