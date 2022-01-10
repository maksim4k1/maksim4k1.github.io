import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const linkStyle = `
  position: relative;
  color: var(--color-black);
  font-weight: 600;
  transition: all 0.3s;
  &::after{
    content: "";
    position: absolute;
    display: block;
    left: 0;
    width: 100%;
    height: 2px;
    transition: all 0.3s;
  }
  @media (hover){
    &:hover{
      color: var(--color-coral);
    }
  }
  &.activeLink{
    color: var(--color-coral);
    &::after{
      bottom: 0;
      opacity: 1;
    }
  }
`;

const Link = styled.a`
  ${linkStyle}
  text-decoration: underline;
  &::after{
    opacity: 0;
  }
  &:hover{
    text-decoration: underline;
  }
`;
const RouterLink = styled(NavLink)`
  ${linkStyle}
  &::after{
    bottom: -5px;
    background-color: var(--color-coral);
    opacity: 0;
  }
  @media (hover){
    &:hover{
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
        ? <RouterLink {...props} activeClassName="activeLink">
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