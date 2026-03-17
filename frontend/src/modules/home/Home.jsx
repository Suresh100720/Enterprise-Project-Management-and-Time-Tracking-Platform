import React from "react";
import { Card, Button } from "antd";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div style={{ padding: "20px" }}>
      <h1>Welcome to Enterprise Project Platform 🚀</h1>

      <Card style={{ marginTop: "20px" }}>
        <h3>Quick Actions</h3>

        <Button
          type="primary"
          onClick={() => navigate("/dashboard/project-dashboard")}
          style={{ marginRight: "10px" }}
        >
          Go to Dashboard
        </Button>

        <Button onClick={() => navigate("/dashboard/projects")}>
          View Projects
        </Button>
      </Card>
    </div>
  );
}

export default Home;