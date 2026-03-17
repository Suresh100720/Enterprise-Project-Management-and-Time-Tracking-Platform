import { useEffect, useState } from "react";
import { initializeSocket, disconnectSocket } from "../config/socketConfig";
import useAuth from "./useAuth";

function useSocket() {

  const { token } = useAuth();
  const [activeSocketConnection, setActiveSocketConnection] = useState(null);

  useEffect(() => {

    if (!token) return;

    const socketConnection = initializeSocket(token);

    setActiveSocketConnection(socketConnection);

    return () => {
      disconnectSocket();
    };

  }, [token]);

  return activeSocketConnection;
}

export default useSocket;