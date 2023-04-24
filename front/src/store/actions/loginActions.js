import * as socketConnection from "../../utils/connectSocket";
import store from "../store";
import { setMyLocation } from "../../pages/map/mapSlice";

export const loginAction = (data) => {
  socketConnection.login(data);
};

export const setMyLocationHandler = (position) => {
  store.dispatch(setMyLocation(position));
};
