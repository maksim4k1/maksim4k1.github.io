import React from "react";
import styled from "styled-components";

const Link = styled.a`
  position: relative;
  color: var(--color-black);
  font-weight: 600;
  transition: all 0.3s;
  &::after{
    content: "";
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: var(--color-coral);
    opacity: 0;
    transition: all 0.3s;
  }
  &:hover{
    color: var(--color-coral);
    &::after{
      bottom: 0;
      opacity: 1;
    }
  }
`;

function AppLink (props) {
  return(
    <Link {...props}>
      {props.children}
    </Link>
  );
}

export default AppLink;