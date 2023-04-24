import { Box, Container } from "@mui/material";
import React from "react";
import { MapContainer, Popup, TileLayer, useMap, Marker } from "react-leaflet";
import { useSelector } from "react-redux";
import { iconPerson } from "./icon";

const Map = () => {
  const myLocation = useSelector((state) => state.map.myLocation);
  const defualtMapProps = {
    position: {
      lat: myLocation.lat,
      lng: myLocation.lng,
    },
    zoomLevel: 11,
  };
  return (
    <MapContainer
      center={defualtMapProps.position}
      zoom={defualtMapProps.zoomLevel}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker
        position={defualtMapProps.position}
        icon={iconPerson(defualtMapProps.position)}
      >
        <Popup>my Location</Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;
