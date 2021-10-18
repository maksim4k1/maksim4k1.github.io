import React from "react";
import Section from "./UI/Section";
import Title from "../components/UI/Title";
import { connect } from "react-redux";
import List from "./UI/List";

function Portfolio ({portfolio}) {
  return(
    <Section id="portfolio">
      <Title>Портфолио</Title>
      <List list={portfolio}/>
    </Section>
  );
}

const stateToProps = (state) => ({
  portfolio: state.portfolio
});

export default connect(stateToProps)(Portfolio);