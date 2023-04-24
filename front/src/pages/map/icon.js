import L from "leaflet";

const iconPerson = () =>
  new L.Icon({
    iconUrl: require("./marker-pin-person.png"),
    iconRetinaUrl: require("./marker-pin-person.png"),
    iconSize: [25, 25],
    iconAnchor: [0, 0],
    popupAnchor: [13, 20],
  });

const iconOnlineUser = () =>
  new L.Icon({
    iconUrl: require("./marker-onlineuser.png"),
    iconRetinaUrl: require("./marker-onlineuser.png"),
    iconSize: [25, 25],
    iconAnchor: [0, 0],
    popupAnchor: [13, 20],
  });

export { iconPerson, iconOnlineUser };

export { iconPerson };
