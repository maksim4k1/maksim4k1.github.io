import React from "react";
import { useState } from "react";
import styled from "styled-components";
import { gap } from "../../../styles/mixins";
import AppLink from "../AppLink";

const CardElement = styled.div`
  width: 100%;
  display: flex;
  flex-flow: column;
  ${gap("10px")}
  margin: 0 auto;
  &.full-width{
    width: 80%;
    grid-column-start: 1;
    grid-column-end: 3;
    &>div>img{
      height: 280px;
    }
    &>h4{
      text-align: center;
    }
  }
`;
const Image = styled.img`
  width: 100%;
  height: 220px;
  object-fit: cover;
  object-position: center;
  background-color: var(--color-bg-gray);
  border-radius: 10px;
  box-shadow: 0 0 10px var(--color-gray);
`;
const CertificateImage = styled.div`
  position: relative;
  width: 100%;
  height: min-content;
  border-radius: 10px;
  cursor: pointer;
  &::after{
    content: "Открыть файл";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--color-modal-white);
    font-weight: 600;
    background: var(--color-modal-bg);
    opacity: 0;
    transition: opacity 0.5s;
    z-index: 10;
  }
  &:hover{
    &::after{
      opacity: 1;
    }
  }
`;
const ProjectImage = styled.div`
  border-radius: 10px;
`;
const Name = styled.h4`
  font-size: 18px;
`;
const OpenImageElement = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  background: var(--color-modal-bg);
  opacity: 0;
  z-index: 100;
  transition: opacity 0.3s, visibility 0.3s;
`;
const FullScreenImage = styled.img`
  width: 100%;
  height: 100%;
  padding: 50px;
  object-fit: contain;
  @media screen and (max-width: 600px){
    padding: 20px;
  }
`;

function Card ({name, image, link, type, width}) {
  const [showImage, setShowImage] = useState(false);

  function onClickHandler() {
    if(showImage){
      document.body.style = "overflow: auto";
      setShowImage(false);
    } else{
      document.body.style = "overflow: hidden";
      setShowImage(true);
    }
  }
  
  return(
    <CardElement className={width === "full" ? "full-width" : null}>
      {
        type === "certificate"
        ? <>
          <CertificateImage onClick={onClickHandler}>
            <Image src={image} alt={name} />
          </CertificateImage>
          <OpenImageElement onClick={onClickHandler} style={showImage ? {opacity: 1, visibility: "visible"} : {opacity: 0, visibility: "hidden"}}>
            <FullScreenImage src={image} alt={name}/>
          </OpenImageElement>
        </>
        : <ProjectImage>
          <Image src={image} alt={name} />
        </ProjectImage>
      }
      <Name><AppLink target="_blank" rel="noreferrer" href={link}>{name}</AppLink></Name>
    </CardElement>
  );
}

export default Card;