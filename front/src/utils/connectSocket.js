import io from "socket.io-client";

let socket = null;

export const connectSocket = () => {
  socket = io("http://localhost:8000");
  socket.on("connect", () => {
    console.log("Connected to socket");
  });
};

export const login = (data) => {
  socket.emit("user-login", data);
};