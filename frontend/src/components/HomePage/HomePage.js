import React from "react";
import { Container } from "reactstrap";
import SearchForm from "../SearchForm";
import { TitleComponent } from "../tools/TitleComponent";

const HomePage = () => {
  return (
    <>
      <TitleComponent title="Home | Poledex | A Directory of Pole Studios in the Mid-Atlantic" />
      <Container>
        {" "}
        <p>Home</p>
        <SearchForm />
      </Container>
    </>
  );
};

export default HomePage;
