import React, { useEffect } from "react";
import { useParams, withRouter } from "react-router-dom";
import { useSelector } from "react-redux";
import { Container, Row, Col } from "reactstrap";
import styled from "styled-components";
import store from "../../redux/store";
import LoadingSpinner from "../tools/LoadingSpinner";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getStudioById } from "../../redux/actions/studioActions";
import StudioMap from "./StudioMap";
import { TitleComponent } from "../tools/TitleComponent";

const SocialIcons = styled.a`
  margin-right: 0.5rem;
`;

const StudioPage = () => {
  const { studio, isLoading, isLoaded } = useSelector((state) => state.studio);

  let { id } = useParams();

  useEffect(() => {
    store.dispatch(getStudioById(id));
  }, [id]);

  return (
    <>
      <TitleComponent title={`${studio.name} | Poledex`} />
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
                    <StudioInfo studio={studio} />
                  </Col>
                  <Col>
                    <Container>
                      <StudioMap
                        coordinates={studio.coordinates}
                        name={studio.name}
                      />
                    </Container>
                  </Col>
                </Row>
              </Container>
            )}
          </>
        )}
      </Container>
    </>
  );
};

export default withRouter(StudioPage);

const StudioInfo = ({ studio }) => {
  return (
    <Container>
      <Row className="mb-2">
        <Col xs="1">
          <FontAwesomeIcon icon="map-marker-alt" />
        </Col>
        <Col xs="11">
          {studio.address.street}
          <br /> {studio.address.city}, {studio.address.state[0]}{" "}
          {studio.address.postalCode}
        </Col>
      </Row>
      <Row className="mb-2">
        <Col xs="1">
          <FontAwesomeIcon icon="phone-alt" />
        </Col>
        <Col xs="11">
          <a href={`tel:${studio.phoneNum}`}>{studio.phoneNum}</a>
        </Col>
      </Row>
      <Row className="mb-2">
        <Col xs="1">
          <FontAwesomeIcon icon="link" />
        </Col>
        <Col xs="11">
          <a target="_blank" href={studio.website} rel="noopener noreferrer">
            {studio.website}
          </a>
        </Col>
      </Row>
      <Row className="mb-2">
        <Col xs="1">
          <FontAwesomeIcon icon="envelope" />
        </Col>
        <Col xs="11">{studio.email}</Col>
      </Row>
      <Row className="mb-2">
        <Col>
          {studio.socialMedia.facebook && (
            <SocialIcons
              aria-label="facebook"
              target="_blank"
              href={studio.socialMedia.facebook}
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={["fab", "facebook-f"]} />
            </SocialIcons>
          )}
          {studio.socialMedia.instagram && (
            <SocialIcons
              aria-label="instagram"
              target="_blank"
              href={studio.socialMedia.instagram}
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={["fab", "instagram"]} />
            </SocialIcons>
          )}
          {studio.socialMedia.twitter && (
            <SocialIcons
              aria-label="twitter"
              target="_blank"
              href={studio.socialMedia.twitter}
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={["fab", "twitter"]} />
            </SocialIcons>
          )}
          {studio.socialMedia.youtube && (
            <SocialIcons
              aria-label="youtube"
              target="_blank"
              href={studio.socialMedia.youtube}
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={["fab", "youtube"]} />
            </SocialIcons>
          )}
        </Col>
      </Row>
      <Row className="mb-2">
        <Col>&#91; {studio.categories.join(", ")} &#93;</Col>
      </Row>
    </Container>
  );
};
