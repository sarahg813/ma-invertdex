import React, { useState } from "react";
import { withRouter, useHistory } from "react-router-dom";
import { Button, Form, FormGroup, Input, FormText } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch } from "react-redux";
import { searchStudios } from "../redux/actions/studiosActions";

const SearchForm = () => {
  let history = useHistory();
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState("");

  const handleOnChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    dispatch(searchStudios(searchQuery));
    history.push("/results");
  };

  return (
    <Form>
      <FormGroup>
        <Input
          type="text"
          name="search"
          id="search"
          value={searchQuery}
          onChange={handleOnChange}
        />
        <FormText color="muted">
          Search for studios by name, city, state, or zip code.
        </FormText>
        <Button type="submit" aria-label="search" onClick={handleSubmit}>
          <FontAwesomeIcon icon="search" />
        </Button>
      </FormGroup>
    </Form>
  );
};

export default withRouter(SearchForm);
