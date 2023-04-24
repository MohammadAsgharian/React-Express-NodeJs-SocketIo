import store from "../store";
import {
  setOnlineUsers,
  removeDisconnectedUser,
} from "../../pages/map/mapSlice";

export const setOnlineUserHandler = (socketId, userData) => {
  store.dispatch(
    setOnlineUsers(
      userData.map((user) => {
        if (user.socketId === socketId) {
          user.myself = true;
        }

        console.log(user);
        return user;
      })
    )
  );
};

export const userDisconnectedHandler = (disconnectedUserSocketId) => {
  store.dispatch(removeDisconnectedUser(disconnectedUserSocketId));
};
