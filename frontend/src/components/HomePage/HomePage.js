import React from "react";
import { Container } from "reactstrap";
import SearchForm from "../SearchForm";
import { TitleComponent } from "../tools/TitleComponent";
import "./HomePage.scss";

const HomePage = () => {
  return (
    <div className="home">
      <TitleComponent title="Home | Poledex | A Directory of Pole Studios in the Mid-Atlantic" />
      <Container className="home-container">
        <h4>Find a studio where you can pole in the Mid-Atlantic!</h4>
        <SearchForm />
      </Container>
    </div>
  );
};

export default HomePage;
