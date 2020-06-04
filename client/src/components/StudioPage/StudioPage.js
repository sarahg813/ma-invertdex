import React, { useEffect } from "react";
import { useParams, withRouter } from "react-router-dom";
import { useSelector } from "react-redux";
import { Container, Row, Col } from "reactstrap";
import configureStore from "../../redux/configureStore";
import LoadingSpinner from "../tools/LoadingSpinner";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getStudioById } from "../../redux/actions/studioActions";
import StudioMap from "./StudioMap";
import { TitleComponent } from "../tools/TitleComponent";

const store = configureStore();

const StudioPage = () => {
  const { studio, isLoading, isLoaded } = useSelector((state) => state.studio);

  let { id } = useParams();

  useEffect(() => {
    store.dispatch(getStudioById(id));
  }, [id]);

  return (
    <div className="studio-root">
      <TitleComponent title={`${studio.name} | Poledex`} />
      <>
        {isLoading ? (
          <LoadingSpinner />
        ) : (
          <>
            {isLoaded && (
              <Container className="studio-container">
                <div className="studio-name-container">
                  <h4 className="studio-name">{studio.name}</h4>
                </div>
                <div className="studio-desc-container">
                  <StudioInfo studio={studio} />

                  <Container>
                    <StudioMap
                      coordinates={studio.coordinates}
                      name={studio.name}
                    />
                  </Container>
                </div>
              </Container>
            )}
          </>
        )}
      </>
    </div>
  );
};

export default withRouter(StudioPage);

const StudioInfo = ({ studio }) => {
  return (
    <Container className="studioinfo-container">
      <Row className="mb-2">
        <Col xs="1">
          <FontAwesomeIcon icon="map-marker-alt" />
        </Col>
        <Col xs="10">
          {studio.address.street}
          <br /> {studio.address.city}, {studio.address.state[0]}{" "}
          {studio.address.postalCode}
        </Col>
      </Row>
      <Row className="mb-2">
        <Col xs="1">
          <FontAwesomeIcon icon="phone-alt" />
        </Col>
        <Col xs="10">
          <a className="studioinfo-links" href={`tel:${studio.phoneNum}`}>
            {studio.phoneNum}
          </a>
        </Col>
      </Row>
      <Row className="mb-2">
        <Col xs="1">
          <FontAwesomeIcon icon="link" />
        </Col>
        <Col xs="10">
          <a
            className="studioinfo-links"
            target="_blank"
            href={studio.website}
            rel="noopener noreferrer"
          >
            {studio.website}
          </a>
        </Col>
      </Row>
      <Row className="mb-2">
        <Col xs="1">
          <FontAwesomeIcon icon="envelope" />
        </Col>
        <Col xs="10">{studio.email}</Col>
      </Row>
      <Row className="mb-2">
        <Col>
          {studio.socialMedia.facebook && (
            <a
              className="studioinfo-icons"
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
              className="studioinfo-icons"
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
              className="studioinfo-icons"
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
              className="studioinfo-icons"
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
    </Container>
  );
};
