import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Deskription = styled.p`
  font-size: 18px;
  font-weight: 500;
`;
const Error = styled.span`
  font-weight: 600;
`;
const Link = styled(NavLink)`
  color: var(--color-coral);
  font-weight: 600;
  &:hover{
    text-decoration: underline;
  }
`;

function ErrorDeskription ({children}) {
  return(
    <Deskription>
      <Error>Error:</Error> {children} <Link to="/">Go to Main page</Link>
    </Deskription>
  );
}

export default ErrorDeskription;