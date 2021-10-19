import React from "react";
import styled from "styled-components";
import { gap } from "../../../styles/mixins";
import AppLink from "../AppLink";

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
  border-radius: 10px;
`;
const Name = styled.h4`
  font-size: 18px;
`;

function Card ({name, image, link}) {
  return(
    <CardElement>
      <Image src={image} alt={name} />
      <Name><AppLink target="_blank" rel="noreferrer" href={link}>{name}</AppLink></Name>
    </CardElement>
  );
}

export default Card;