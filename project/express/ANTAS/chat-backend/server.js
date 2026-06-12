const express = require("express");
const http = require("http");
const { Server } = require("socket.io");

const app = express();
const server = http.createServer(app);

const io = new Server(server);

io.on("connection", (socket) => {
  console.log("Connected:", socket.id);

  socket.on("message", (msg) => {
    console.log("Client:", msg);

    socket.emit(
      "reply",
      "Message received!"
    );
  });
});

server.listen(3000, () => {
  console.log("Server running");
});