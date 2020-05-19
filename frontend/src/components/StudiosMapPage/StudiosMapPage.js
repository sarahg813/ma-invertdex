import React from "react";
import { useHistory, withRouter } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Container, Button } from "reactstrap";
import L from "leaflet";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";
import mapIcon from "../images/map-icon.png";
import LoadingSpinner from "../tools/LoadingSpinner";
import { getStudioById } from "../../redux/actions/studioActions";
import { TitleComponent } from "../tools/TitleComponent";

const myIcon = L.icon({
  iconUrl: mapIcon,
  iconSize: [18, 30],
  iconAnchor: [12.5, 41],
  popupAnchor: [0, -41],
});

const StudiosMapPage = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { studios, isLoading } = useSelector((state) => state.studios);

  const handleOnClick = (id) => {
    history.push("/profile/" + id);
    dispatch(getStudioById(id));
  };
  return (
    <>
      <TitleComponent title="Studios Map | Poledex" />
      <Container>
        {isLoading ? (
          <LoadingSpinner />
        ) : (
          <Map
            center={[39.949516, -75.150245]}
            zoom={6}
            style={{ width: "100%", height: "85vh" }}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
              url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager_labels_under/{z}/{x}/{y}{r}.png"
              subdomains="abcd"
              maxZoom="19"
            />

            {studios.map((studio) => {
              const position = [
                studio.coordinates.latitude,
                studio.coordinates.longitude,
              ];
              return (
                <Marker position={position} key={studio._id} icon={myIcon}>
                  <Popup>
                    {studio.name} <br />
                    {studio.address.street}
                    <br />
                    {studio.address.city}, {studio.address.state[0]}{" "}
                    {studio.address.postalCode}
                    <br />
                    <Button
                      type="button"
                      onClick={() => {
                        handleOnClick(studio._id);
                      }}
                    >
                      View More Info
                    </Button>
                  </Popup>
                </Marker>
              );
            })}
          </Map>
        )}
      </Container>
    </>
  );
};

export default withRouter(StudiosMapPage);
