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

io.on("connection", (socket) => {
  console.log("User is connected");
  socket.on("disconnect", () => {
    disconnectedHandler(socket.id);
  });
});

server.listen(8000);

// Socket Events
const disconnectedHandler = (id) => {
  console.log(`Connections is failed ${id}`);
};
