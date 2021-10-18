import React from "react";
import styled from "styled-components";
import Card from "../Card";

const ListElement = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
  justify-content: center;
`;

function List ({list}) {
  return(
    <ListElement>
      {
        list.map(item => {
          return <Card key={item.id} {...item}/>
        })
      }
    </ListElement>
  );
}

export default List;