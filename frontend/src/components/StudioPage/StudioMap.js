import React from "react";
import L from "leaflet";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";
import mapIcon from "../../images/map-icon.png";

const myIcon = L.icon({
  iconUrl: mapIcon,
  iconSize: [25, 41],
  iconAnchor: [12.5, 41],
  popupAnchor: [0, -41],
});

const StudioMap = (props) => {
  const position = [props.coordinates.latitude, props.coordinates.longitude];

  return (
    <Map center={position} zoom={17}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
        url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager_labels_under/{z}/{x}/{y}{r}.png"
        subdomains="abcd"
        maxZoom="19"
      />
      <Marker position={position} icon={myIcon}>
        <Popup>{props.name}</Popup>
      </Marker>
    </Map>
  );
};

export default StudioMap;
