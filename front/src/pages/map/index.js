import { Box, Container, FormLabel } from "@mui/material";
import React from "react";
import { MapContainer, Popup, TileLayer, useMap, Marker } from "react-leaflet";
import { useSelector } from "react-redux";
import { iconOnlineUser, iconPerson } from "./icon";

const Map = () => {
  const myLocation = useSelector((state) => state.map.myLocation);
  const onlineUsers = useSelector((state) => state.map.onlineUsers);

  const defualtMapProps = {
    position: {
      lat: myLocation.lat,
      lng: myLocation.lng,
    },
    zoomLevel: 8,
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
      <Marker position={defualtMapProps.position} icon={iconPerson()}>
        <Popup>my Location</Popup>
      </Marker>
      {onlineUsers.map((onlineUserName) => {
        if (!onlineUserName.myself) {
          return (
            <Marker
              position={onlineUserName.coords}
              icon={iconOnlineUser()}
              key={onlineUserName.sockerId}
            >
              <p>{onlineUserName.username}</p>
              <Popup>{onlineUserName.username}</Popup>
            </Marker>
          );
        }
      })}
    </MapContainer>
  );
};

export default Map;
