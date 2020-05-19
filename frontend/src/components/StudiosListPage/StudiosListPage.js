import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  Button,
  Col,
  Container,
  Table,
  Form,
  FormGroup,
  Label,
  Input,
} from "reactstrap";
import { getStudioById } from "../../redux/actions/studioActions";
import {
  filterStudios,
  setClearResults,
} from "../../redux/actions/studiosActions";
import LoadingSpinner from "../tools/LoadingSpinner";
import { TitleComponent } from "../tools/TitleComponent";

const StudiosListPage = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { studios, isLoading, results } = useSelector((state) => state.studios);
  const [studiosData, setStudiosData] = useState(studios);
  const [selected, setSelected] = useState("");

  useEffect(() => {
    const getData = () => {
      results.length > 0 ? setStudiosData(results) : setStudiosData(studios);
    };

    getData();
  });

  const handleOnChange = (event) => {
    const { value } = event.target;

    setSelected(value);

    if (value !== "All States") {
      dispatch(filterStudios(value));
    }
  };

  const handleOnClick = (id) => {
    history.push("/profile/" + id);
    dispatch(getStudioById(id));
  };

  const handleButton = () => {
    setSelected("All States");
    dispatch(setClearResults());
  };

  return (
    <>
      <TitleComponent title="All Studios List | Poledex" />
      <Container>
        <h3>Studios List</h3>
        <Container>
          <Form>
            <FormGroup row>
              <Label for="stateFilter" sm={2}>
                Filter by State
              </Label>
              <Col sm={6}>
                <Input
                  type="select"
                  name="filter"
                  id="stateFilter"
                  value={selected}
                  onChange={handleOnChange}
                >
                  <option>All States</option>
                  <option>DC</option>
                  <option>Delaware</option>
                  <option>Maryland</option>
                  <option>New Jersey</option>
                  <option>New York</option>
                  <option>Pennsylvania</option>
                  <option>Virginia</option>
                  <option>West Virginia</option>
                </Input>
              </Col>
              <Col sm={4}>
                <Button
                  value="clear filter"
                  type="button"
                  onClick={handleButton}
                >
                  Clear Filter
                </Button>
              </Col>
            </FormGroup>
          </Form>
        </Container>
        <Container>
          {isLoading ? (
            <LoadingSpinner />
          ) : (
            <>
              <Table hover style={{ cursor: "pointer" }}>
                <thead>
                  <tr>
                    <th>Studio Name</th>
                    <th>City</th>
                    <th>State</th>
                  </tr>
                </thead>
                <tbody>
                  {studiosData.map((studio) => (
                    <React.Fragment key={studio._id}>
                      <tr
                        onClick={() => {
                          handleOnClick(studio._id);
                        }}
                      >
                        <th scope="row">{studio.name}</th>
                        <td>{studio.address.city}</td>
                        <td>{studio.address.state[0]}</td>
                      </tr>
                    </React.Fragment>
                  ))}
                </tbody>
              </Table>
            </>
          )}
        </Container>{" "}
      </Container>
    </>
  );
};

export default StudiosListPage;
