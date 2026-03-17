export const projectSocketHandler = (ioServer, socketConnection) => {

  socketConnection.on("project-update", (projectPayload) => {

    console.log("Project updated:", projectPayload);

    ioServer.emit("project-update", projectPayload);

  });

};