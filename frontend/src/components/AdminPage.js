import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Container, Table, Button } from "reactstrap";
import ReactLoading from "react-loading";
import { deleteStudio } from "../redux/actions/studiosActions";
import AddStudioModal from "./AddStudioModal";
import EditStudioModal from "./EditStudioModal";

const AdminPage = () => {
  const dispatch = useDispatch();
  const { studios, isLoading } = useSelector((state) => state.studios);

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
        {isLoading ? (
          <ReactLoading
            type="bars"
            color="#242424"
            height="50px"
            width="50px"
          />
        ) : (
          <tbody>
            {studios.map((studio) => (
              <React.Fragment key={studio._id}>
                <tr>
                  <th scope="row">{studio.name}</th>
                  <td>{studio.address.street} </td>
                  <td>{studio.address.city}</td>
                  <td>{studio.address.state[0]}</td>
                  <td>
                    <EditStudioModal id={studio._id} />
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
        )}
      </Table>
    </Container>
  );
};

export default AdminPage;
