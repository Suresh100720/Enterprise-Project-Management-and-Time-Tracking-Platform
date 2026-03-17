export const notificationSocketHandler = (ioServer, socketConnection) => {

  socketConnection.on("send-notification", (notificationPayload) => {

    console.log("Notification received:", notificationPayload);

    ioServer.emit("notification", notificationPayload);

  });

};