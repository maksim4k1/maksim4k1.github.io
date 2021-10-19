import React from "react";
import styled from "styled-components";
import { gap } from "../../../styles/mixins";

const CardElement = styled.div`
  width: 100%;
  display: flex;
  flex-flow: column;
  ${gap("10px")}
`;
const Image = styled.img`
  width: 100%;
  height: 220px;
  object-fit: cover;
  object-position: center;
  background-color: var(--color-bg-gray);
`;
const Name = styled.h4`
  &>a{
    position: relative;
    color: var(--color-black);
    font-size: 18px;
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
  }
`;

function Card ({name, image, link}) {
  return(
    <CardElement>
      <Image src={image} alt={name} />
      <Name><a target="_blank" rel="noreferrer" href={link}>{name}</a></Name>
    </CardElement>
  );
}

export default Card;