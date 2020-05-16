import React, { useEffect } from "react";
import { useParams, withRouter } from "react-router-dom";
import { useSelector } from "react-redux";
import { Container, Row, Col } from "reactstrap";
import store from "../redux/store";
import LoadingSpinner from "./tools/LoadingSpinner";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getStudioById } from "../redux/actions/studioActions";

const StudioPage = () => {
  const { studio, isLoading, isLoaded } = useSelector((state) => state.studio);

  let { id } = useParams();

  useEffect(() => {
    store.dispatch(getStudioById(id));
  }, []);

  return (
    <Container>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <>
          {isLoaded && (
            <Container>
              <Row>
                <Col>
                  <h4>{studio.name}</h4>
                </Col>
              </Row>
              <Row>
                <Col>
                  <FontAwesomeIcon icon="map-marker-alt" />
                </Col>
                <Col>
                  {studio.address.street}
                  <br /> {studio.address.city}, {studio.address.state[0]}{" "}
                  {studio.address.postalCode}
                </Col>
              </Row>
              <Row>
                <Col>
                  <FontAwesomeIcon icon="phone-alt" />
                </Col>
                <Col>
                  <a href={`tel:${studio.phoneNum}`}>{studio.phoneNum}</a>
                </Col>
              </Row>
              <Row>
                <Col>
                  <FontAwesomeIcon icon="link" />
                </Col>
                <Col>
                  <a
                    target="_blank"
                    href={studio.website}
                    rel="noopener noreferrer"
                  >
                    {studio.website}
                  </a>
                </Col>
              </Row>
              <Row>
                <Col>
                  <FontAwesomeIcon icon="envelope" />
                </Col>
                <Col>{studio.email}</Col>
              </Row>
              <Row>
                <Col>
                  {studio.socialMedia.facebook && (
                    <a
                      aria-label="facebook"
                      target="_blank"
                      href={studio.socialMedia.facebook}
                      rel="noopener noreferrer"
                    >
                      <FontAwesomeIcon icon={["fab", "facebook-f"]} />
                    </a>
                  )}
                  {studio.socialMedia.instagram && (
                    <a
                      aria-label="instagram"
                      target="_blank"
                      href={studio.socialMedia.instagram}
                      rel="noopener noreferrer"
                    >
                      <FontAwesomeIcon icon={["fab", "instagram"]} />
                    </a>
                  )}
                  {studio.socialMedia.twitter && (
                    <a
                      aria-label="twitter"
                      target="_blank"
                      href={studio.socialMedia.twitter}
                      rel="noopener noreferrer"
                    >
                      <FontAwesomeIcon icon={["fab", "twitter"]} />
                    </a>
                  )}
                  {studio.socialMedia.youtube && (
                    <a
                      aria-label="youtube"
                      target="_blank"
                      href={studio.socialMedia.youtube}
                      rel="noopener noreferrer"
                    >
                      <FontAwesomeIcon icon={["fab", "youtube"]} />
                    </a>
                  )}
                </Col>
              </Row>
              <Row>
                <Col>&#91; {studio.categories.join(", ")} &#93;</Col>
              </Row>
            </Container>
          )}
        </>
      )}
    </Container>
  );
};

export default withRouter(StudioPage);
