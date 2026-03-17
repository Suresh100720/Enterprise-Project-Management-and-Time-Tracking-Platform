import React, { useEffect, useState } from "react";
import { List, Badge } from "antd";

import useSocket from "../../hooks/useSocket";

function Notifications() {

  const socketConnection = useSocket();

  const [notificationsList, setNotificationsList] = useState([]);

  useEffect(() => {

    if (!socketConnection) return;

    socketConnection.on(
      "notification",
      (notificationObject) => {

        setNotificationsList((previousNotifications) => [
          notificationObject,
          ...previousNotifications
        ]);

      }
    );

  }, [socketConnection]);

  return (
    <div>

      <h2>Notifications</h2>

      <List
        bordered
        dataSource={notificationsList}
        renderItem={(notificationItem) => (
          <List.Item>
            <Badge
              status="processing"
              text={notificationItem.message}
            />
          </List.Item>
        )}
      />

    </div>
  );
}

export default Notifications;