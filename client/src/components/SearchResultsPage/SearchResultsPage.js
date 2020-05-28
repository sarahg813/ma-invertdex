import React from "react";
import { useHistory, withRouter } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Container, Table } from "reactstrap";
import LoadingSpinner from "../tools/LoadingSpinner";
import { getStudioById } from "../../redux/actions/studioActions";
import SearchForm from "../SearchForm";
import { TitleComponent } from "../tools/TitleComponent";

const SearchResultsPage = () => {
  let history = useHistory();
  const dispatch = useDispatch();
  const { results, isLoading } = useSelector((state) => state.studios);

  const handleOnClick = (id) => {
    history.push("/profile/" + id);
    dispatch(getStudioById(id));
  };

  return (
    <Container className="searchresults-root">
      <TitleComponent title="Search Results | Poledex" />

      <SearchForm />
      <>
        {isLoading ? (
          <div className="searchresults-spinner">
            <LoadingSpinner />
          </div>
        ) : (
          <>
            <div>
              <h3 className="searchresults-title">Search Results</h3>
            </div>
            <Table hover style={{ cursor: "pointer" }}>
              <thead>
                <tr>
                  <th>Studio Name</th>
                  <th>City</th>
                  <th>State</th>
                  <th>Zip Code</th>
                </tr>
              </thead>
              <tbody>
                {results.map((studio) => (
                  <React.Fragment key={studio._id}>
                    <tr
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
          </>
        )}
      </>
    </Container>
  );
};

export default withRouter(SearchResultsPage);
