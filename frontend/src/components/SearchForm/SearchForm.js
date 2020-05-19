import React, { useState } from "react";
import { withRouter, useHistory } from "react-router-dom";
import {
  Button,
  Col,
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
    <Container>
      <Form>
        <FormGroup row>
          <Col sm={10}>
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
          </Col>
          <Col sm={2}>
            <Button type="submit" aria-label="submit" onClick={handleSubmit}>
              <FontAwesomeIcon icon="search" />
            </Button>
          </Col>
        </FormGroup>
      </Form>
    </Container>
  );
};

export default withRouter(SearchForm);
