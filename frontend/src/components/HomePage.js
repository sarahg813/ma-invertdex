import React from "react";
import { Container } from "reactstrap";
import SearchForm from "./SearchForm";

const HomePage = () => {
  return (
    <Container>
      {" "}
      <p>Home</p>
      <SearchForm />
    </Container>
  );
};

export default HomePage;
