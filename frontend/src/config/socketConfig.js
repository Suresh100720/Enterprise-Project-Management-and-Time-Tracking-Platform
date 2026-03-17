import { io } from "socket.io-client";

const SOCKET_URL =
  import.meta.env.VITE_SOCKET_URL || "http://localhost:5000";

let socketInstance = null;

export const initializeSocket = (authToken) => {
  if (!socketInstance) {
    socketInstance = io(SOCKET_URL, {
      auth: {
        token: authToken
      },
      transports: ["websocket"]
    });
  }

  return socketInstance;
};

export const getSocket = () => {
  if (!socketInstance) {
    throw new Error("Socket not initialized");
  }

  return socketInstance;
};

export const disconnectSocket = () => {
  if (socketInstance) {
    socketInstance.disconnect();
    socketInstance = null;
  }
};