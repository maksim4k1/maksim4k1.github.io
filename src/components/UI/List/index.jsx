import React from "react";
import styled from "styled-components";
import Card from "../Card";

const ListElement = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 40px;
  justify-content: center;
  @media screen and (max-width: 650px){
    display: flex;
    flex-wrap: wrap;
    &>div{
      max-width: 420px;
      &:nth-child(2n){
        margin: 0 0 0 auto;
      }
    }
  }
  @media screen and (max-width: 550px){
    &>div{
      max-width: 350px;
    }
  }
`;

function List ({list, type}) {
  return(
    <ListElement>
      {
        list.map((item, index) => {
          if(list.length === 1) return <Card key={item.id} {...item} type={type} width="full" position="center"/>
          if(index === list.length - 1 && list.length % 2 === 1) return <Card key={item.id} {...item} type={type} width="full" position="standart"/>
          return <Card key={item.id} {...item} type={type} width="half" position="standart"/>
        })
      }
    </ListElement>
  );
}

export default List;