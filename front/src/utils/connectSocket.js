import io from "socket.io-client";
import {
  setOnlineUserHandler,
  userDisconnectedHandler,
} from "../store/actions/userActions";

let socket = null;

export const connectSocket = () => {
  socket = io("http://localhost:8000");
  socket.on("connect", () => {
    console.log("Connected to socket");
  });

  socket.on("online-users", (userData) => {
    setOnlineUserHandler(socket.id, userData);
  });
  socket.on("user-disconnect", (disconnectedUserSocketId) => {
    userDisconnectedHandler(disconnectedUserSocketId);
  });
};

export const login = (data) => {
  socket.emit("user-login", data);
};
