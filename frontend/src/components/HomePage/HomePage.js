import React from "react";
import { Container } from "reactstrap";
import SearchForm from "../SearchForm";
import { TitleComponent } from "../tools/TitleComponent";

const HomePage = () => {
  return (
    <div className="home-root">
      <TitleComponent title="Home | Poledex | A Directory of Pole Studios in the Mid-Atlantic" />
      <Container className="home-container">
        <h4>Find a pole studio in the Mid-Atlantic!</h4>
        <SearchForm />
      </Container>
    </div>
  );
};

export default HomePage;
