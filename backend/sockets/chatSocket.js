export const chatSocketHandler = (ioServer, socketConnection) => {

  socketConnection.on("chat-message", (messagePayload) => {

    console.log("Chat message:", messagePayload);

    ioServer.emit("chat-message", messagePayload);

  });

};