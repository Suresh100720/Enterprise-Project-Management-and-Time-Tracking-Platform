let ioInstance;

export const initializeSocketService = (ioServer) => {
  ioInstance = ioServer;

  ioInstance.on("connection", (socketConnection) => {

    console.log("User connected:", socketConnection.id);

    socketConnection.on("chat-message", (messagePayload) => {
      ioInstance.emit("chat-message", messagePayload);
    });

    socketConnection.on("notification", (notificationPayload) => {
      ioInstance.emit("notification", notificationPayload);
    });

    socketConnection.on("disconnect", () => {
      console.log("User disconnected:", socketConnection.id);
    });

  });
};

export const getSocketInstance = () => {
  return ioInstance;
};