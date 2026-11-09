// Chat App — starter. Your logic goes here.
// Steps: https://skill-grid-weld.vercel.app/projects/chat-app
import { useState } from "react";
import { socket } from "./socket.js";

export default function App() {
  const [username, setUsername] = useState("");
  const [messages, setMessages] = useState([]);
  // TODO 1: Ask for a username, then connect (socket.emit username).
  // TODO 2: Listen for incoming "message" events; append to messages.
  // TODO 3: Send a message on submit (socket.emit "message").
  // TODO 4: Show who is online.
  void socket;
  return (
    <main>
      <h1>Chat App</h1>
      <p>Join with a username to start chatting.</p>
    </main>
  );
}
