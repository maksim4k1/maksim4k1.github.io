import React from "react";
import { NavLink } from "react-router-dom";
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
  @media (hover){
    &:hover{
      color: var(--color-coral);
      &::after{
        bottom: 0;
        opacity: 1;
      }
    }
  }
`;
const RouterLink = styled(NavLink)`
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
  @media (hover){
    &:hover{
      color: var(--color-coral);
      &::after{
        bottom: 0;
        opacity: 1;
      }
    }
  }
`;

function AppLink (props) {
  return(
    <>
      {
        props.type === "navlink"
        ? <RouterLink {...props}>
          {props.children}
        </RouterLink>
        : <Link {...props}>
          {props.children}
        </Link>
      }
    </>
  );
}

export default AppLink;