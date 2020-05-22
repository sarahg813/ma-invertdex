import React, { useState } from "react";
import { withRouter, useHistory } from "react-router-dom";
import {
  Button,
  Container,
  Form,
  FormGroup,
  Input,
  FormText,
} from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch } from "react-redux";
import { searchStudios } from "../../redux/actions/studiosActions";

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
    <Container className="search-root">
      <Form>
        <FormGroup className="search-formgroup">
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
        </FormGroup>
        <div>
          <Button
            type="submit"
            aria-label="search-submit"
            color="success"
            onClick={handleSubmit}
          >
            <FontAwesomeIcon icon="search" />
          </Button>
        </div>
      </Form>
    </Container>
  );
};

export default withRouter(SearchForm);
