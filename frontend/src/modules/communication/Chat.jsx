import React, { useState } from "react";
import { Card, Input, Button, List, Avatar } from "antd";
import { usePermissions } from "../../hooks/usePermissions";

function Chat() {
  const { role } = usePermissions();

  // =========================
  // STATE
  // =========================
  const [messages, setMessages] = useState([
    {
      id: 1,
      user: "Suresh",
      text: "Project started",
    },
    {
      id: 2,
      user: "Client",
      text: "Please share progress update",
    },
  ]);

  const [input, setInput] = useState("");

  // =========================
  // SEND MESSAGE
  // =========================
  const sendMessage = () => {
    if (!input) return;

    const newMessage = {
      id: Date.now(),
      user: role,
      text: input,
    };

    setMessages([...messages, newMessage]);
    setInput("");
  };

  return (
    <div style={{ padding: "10px" }}>
      <h2>Team & Client Chat 💬</h2>

      {/* ========================= */}
      {/* CHAT BOX */}
      {/* ========================= */}
      <Card style={{ height: "400px", overflowY: "auto" }}>

        <List
          dataSource={messages}
          renderItem={(msg) => (
            <List.Item>
              <List.Item.Meta
                avatar={<Avatar>{msg.user[0]}</Avatar>}
                title={msg.user}
                description={msg.text}
              />
            </List.Item>
          )}
        />

      </Card>

      {/* ========================= */}
      {/* INPUT BOX */}
      {/* ========================= */}
      <Card style={{ marginTop: "10px" }}>
        <div style={{ display: "flex", gap: "10px" }}>

          <Input
            placeholder="Type message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />

          <Button type="primary" onClick={sendMessage}>
            Send
          </Button>

        </div>
      </Card>
    </div>
  );
}

export default Chat;