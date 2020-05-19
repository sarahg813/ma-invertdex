import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Container, Table, Button } from "reactstrap";
import { deleteStudio } from "../../redux/actions/studiosActions";
import AddStudioModal from "./AddStudioModal";
import EditStudioModal from "./EditStudioModal";
import LoadingSpinner from "../tools/LoadingSpinner";
import { TitleComponent } from "../tools/TitleComponent";

const AdminPage = () => {
  const dispatch = useDispatch();
  const { studios, isLoading } = useSelector((state) => state.studios);
  const { isAuthenticated } = useSelector((state) => state.auth);

  const handleDelete = (id) => {
    dispatch(deleteStudio(id));
  };

  return (
    <>
      <TitleComponent title="Admin Page | Poledex" />
      <Container>
        {!isAuthenticated ? (
          <Container>
            <p>You must be logged in to see this page!</p>
          </Container>
        ) : (
          <Container>
            {isLoading ? (
              <LoadingSpinner />
            ) : (
              <>
                <h3>Admin Page</h3>
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
                </Table>
              </>
            )}
          </Container>
        )}
      </Container>
    </>
  );
};

export default AdminPage;
