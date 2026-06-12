const { io } = require("socket.io-client");

const socket = io("http://localhost:3000");

socket.on("connect", () => {
  console.log("Connected");

  socket.emit(
    "message",
    "Hello Server"
  );
});

socket.on("reply", (msg) => {
  console.log(msg);
});