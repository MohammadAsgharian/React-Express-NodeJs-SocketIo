const express = require("express");
const app = express();
const cors = require("cors");
const http = require("http");
const { Server } = require("socket.io");

const server = http.createServer(app);

app.use(cors());

const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["Get", "Set"],
  },
});

app.get("/", (req, res) => {
  res.send("Hello World");
});

let onlineUsers = {};

io.on("connection", (socket) => {
  console.log("User is connected");
  socket.on("user-login", (data) => {
    console.log("user-login");
    loginEventHandler(data, socket);
  });
  socket.on("disconnect", () => {
    disconnectedHandler(socket.id);
  });
});

server.listen(8000);

// Socket Events
const disconnectedHandler = (id) => {
  console.log(`Connections is failed ${id}`);
  removeOnlineUserEventHandler(id);
  broadcastDisconnectedUser(id);
};

const removeOnlineUserEventHandler = (id) => {
  if (onlineUsers[id]) {
    delete onlineUsers[id];
  }
};

const broadcastDisconnectedUser = (disconnectedUserSocketId) => {
  io.to("logged-user").emit("user-disconnect", disconnectedUserSocketId);
};

const loginEventHandler = (data, socket) => {
  socket.join("logged-user");

  onlineUsers[socket.id] = {
    username: data.username,
    coords: data.coords,
  };

  io.to("logged-user").emit("online-users", getOnlineUsersData());
};

const getOnlineUsersData = () => {
  let onlineUsersData = [];
  Object.entries(onlineUsers).forEach(([key, value]) => {
    onlineUsersData.push({
      socketId: key,
      username: value.username,
      coords: value.coords,
    });
  });

  return onlineUsersData;
};
