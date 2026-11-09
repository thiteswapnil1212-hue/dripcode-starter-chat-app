// Chat server — starter. Your logic goes here.
// Steps: https://skill-grid-weld.vercel.app/projects/chat-app
const { Server } = require("socket.io");

const io = new Server(4000, {
  cors: { origin: "http://localhost:5173" },
});

io.on("connection", (socket) => {
  // TODO 1: Remember this socket's username (sent by the client).
  // TODO 2: On "message", broadcast it to all other clients.
  // TODO 3: On disconnect, remove the user from the online list.
  console.log("user connected:", socket.id);
});
