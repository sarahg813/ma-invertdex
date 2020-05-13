import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Container, Table, Button } from "reactstrap";
import { getStudios, deleteStudio } from "../redux/actions/studioActions";
import AddStudioModal from "./AddStudioModal";

const AdminPage = () => {
  const [allStudios, setAllStudios] = useState([]);
  const dispatch = useDispatch();

  const { studios } = useSelector((state) => state.studios);

  //   useEffect(() => {
  //     setAllStudios(studios);
  //   }, [studios]);

  const handleDelete = (id) => {
    dispatch(deleteStudio(id));
  };

  return (
    <Container>
      <AddStudioModal />
      <Table>
        <thead>
          <tr>
            <th>Studio Name</th>
            <th>Street Address</th>
            <th>City</th>
            <th>State</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {studios.length > 0 &&
            studios.map((studio) => (
              <React.Fragment key={studio._id}>
                <tr>
                  <th scope="row">{studio.name}</th>
                  <td>{studio.address.street} </td>
                  <td>{studio.address.city}</td>
                  <td>{studio.address.state[0]}</td>
                  <td>
                    <Button
                      value="Edit"
                      color="warning"
                      size="sm"
                      type="button"
                    >
                      Edit
                    </Button>
                  </td>
                  <td>
                    <Button
                      value="Delete"
                      color="danger"
                      size="sm"
                      type="button"
                      onClick={() => handleDelete(studio._id)}
                    >
                      Delete
                    </Button>
                  </td>
                </tr>
              </React.Fragment>
            ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default AdminPage;
