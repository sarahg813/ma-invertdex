import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Button, Container, Table, Form, FormGroup, Input } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
    setSelected("Filter by State");
    dispatch(setClearResults());
  };

  return (
    <div className="studioslist-root">
      <TitleComponent title="All Studios List | Poledex" />
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <>
          <Container>
            <div>
              <h3 className="studioslist-title">Studios List</h3>
            </div>
            <Container className="studiosfilter-container">
              <Form className="studiosfilter-form">
                <FormGroup className="studiosfilter-formgroup">
                  <Input
                    type="select"
                    name="filter"
                    id="statesFilter"
                    value={selected}
                    onChange={handleOnChange}
                  >
                    <option>Filter by State</option>
                    <option>DC</option>
                    <option>Delaware</option>
                    <option>Maryland</option>
                    <option>New Jersey</option>
                    <option>New York</option>
                    <option>Pennsylvania</option>
                    <option>Virginia</option>
                    <option>West Virginia</option>
                  </Input>
                </FormGroup>
                <div className="studiosfilter-btn-container">
                  <Button
                    color="primary"
                    value="clear filter"
                    type="button"
                    size="sm"
                    className="ml-2"
                    onClick={handleButton}
                  >
                    <FontAwesomeIcon icon="backspace" /> Filter
                  </Button>
                </div>
              </Form>
            </Container>
            <Container>
              <Table hover>
                <thead>
                  <tr>
                    <th className="studioslist-th">Studio Name</th>
                    <th>City</th>
                    <th>State</th>
                    <th>Zip Code</th>
                  </tr>
                </thead>
                <tbody>
                  {studiosData.map((studio) => (
                    <React.Fragment key={studio._id}>
                      <tr
                        className="studioslist-tr"
                        onClick={() => {
                          handleOnClick(studio._id);
                        }}
                      >
                        <th scope="row">{studio.name}</th>
                        <td>{studio.address.city}</td>
                        <td>{studio.address.state[0]}</td>
                        <td>{studio.address.postalCode}</td>
                      </tr>
                    </React.Fragment>
                  ))}
                </tbody>
              </Table>
            </Container>
          </Container>
        </>
      )}
    </div>
  );
};

export default StudiosListPage;
