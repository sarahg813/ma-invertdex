import React from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Container, Table } from "reactstrap";
import { getStudioById } from "../redux/actions/studioActions";
import LoadingSpinner from "./tools/LoadingSpinner";

const StudiosListPage = () => {
  const dispatch = useDispatch();
  let history = useHistory();
  const { studios, isLoading } = useSelector((state) => state.studios);

  const handleOnClick = (id) => {
    history.push("/profile/" + id);
    dispatch(getStudioById(id));
  };

  return (
    <Container>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <>
          <h3>Studios List</h3>
          <Table hover style={{ cursor: "pointer" }}>
            <thead>
              <tr>
                <th>Studio Name</th>
                <th>City</th>
                <th>State</th>
                <th>Categories</th>
              </tr>
            </thead>
            <tbody>
              {studios.map((studio) => (
                <React.Fragment key={studio._id}>
                  <tr
                    onClick={() => {
                      handleOnClick(studio._id);
                    }}
                  >
                    <th scope="row">{studio.name}</th>
                    <td>{studio.address.city}</td>
                    <td>{studio.address.state[0]}</td>
                    <td>{studio.categories.join(", ")} </td>
                  </tr>
                </React.Fragment>
              ))}
            </tbody>
          </Table>
        </>
      )}
    </Container>
  );
};

export default StudiosListPage;
