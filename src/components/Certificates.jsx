import React from "react";
import Section from "./UI/Section";
import Title from "../components/UI/Title";
import { connect } from "react-redux";
import styled from "styled-components";
import Card from "./UI/Card";

const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
  justify-content: center;
`;

function Certificates ({certificates}) {
  return(
    <Section id="certificates">
      <Title>Сертификаты</Title>
      <List>
        {
          certificates.map(certificate => {
            return <Card key={certificate.id} {...certificate}/>
          })
        }
      </List>
    </Section>
  );
}

const stateToProps = (state) => ({
  certificates: state.certificates
})

export default connect(stateToProps)(Certificates);