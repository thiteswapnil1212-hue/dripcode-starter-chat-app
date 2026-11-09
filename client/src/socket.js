import { io } from "socket.io-client";

// TODO: point at your server (default local: http://localhost:4000).
export const socket = io("http://localhost:4000");
