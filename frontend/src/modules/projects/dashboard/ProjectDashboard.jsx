import React, { useEffect, useState } from "react";
import { Card, Row, Col, Progress, Tag, Button } from "antd";
import { useNavigate } from "react-router-dom";
import { usePermissions } from "../../../hooks/usePermissions";

function ProjectDashboard() {
  const navigate = useNavigate();
  const { role } = usePermissions();

  const [projects, setProjects] = useState([]);

  // =========================
  // LOAD DATA
  // =========================
  useEffect(() => {
    const stored =
      JSON.parse(localStorage.getItem("projects")) || [];

    setProjects(stored);
  }, []);

  // =========================
  // CALCULATIONS
  // =========================
  const totalProjects = projects.length || 2;

  const completedProjects =
    projects.filter((p) => p.status === "Completed").length;

  const progressPercent =
    totalProjects > 0
      ? Math.round((completedProjects / totalProjects) * 100)
      : 0;

  const totalBudget = projects.reduce(
    (sum, p) => sum + Number(p.budget || 0),
    0
  );

  const actualCost = Math.round(totalBudget * 0.75);

  const riskLevel =
    actualCost > totalBudget
      ? "High"
      : progressPercent < 50
      ? "Medium"
      : "Low";

  // =========================
  // ROLE BASED VIEW
  // =========================
  if (role === "Client") {
    return (
      <div style={{ padding: "10px" }}>
        <h2>Client Dashboard 📊</h2>

        <Card title="Project Progress">
          <Progress percent={progressPercent} />
        </Card>

        <Card title="Invoices" style={{ marginTop: "20px" }}>
          <p>Download invoices from Billing section</p>
        </Card>
      </div>
    );
  }

  // =========================
  // MAIN DASHBOARD
  // =========================
  return (
    <div style={{ padding: "10px" }}>
      <h2>Enterprise Dashboard 🚀</h2>

      {/* ========================= */}
      {/* TOP METRICS */}
      {/* ========================= */}
      <Row gutter={16}>
        <Col span={6}>
          <Card title="Projects">{totalProjects}</Card>
        </Col>
        <Col span={6}>
          <Card title="Completed">{completedProjects}</Card>
        </Col>
        <Col span={6}>
          <Card title="Budget">${totalBudget}</Card>
        </Col>
        <Col span={6}>
          <Card title="Actual Cost">${actualCost}</Card>
        </Col>
      </Row>

      {/* ========================= */}
      {/* PROGRESS + UTILIZATION */}
      {/* ========================= */}
      <Row gutter={16} style={{ marginTop: "20px" }}>
        <Col span={12}>
          <Card title="Project Progress">
            <Progress percent={progressPercent} />
          </Card>
        </Col>

        <Col span={12}>
          <Card title="Resource Utilization">
            <Progress percent={65} status="active" />
          </Card>
        </Col>
      </Row>

      {/* ========================= */}
      {/* BURNDOWN + RISK */}
      {/* ========================= */}
      <Row gutter={16} style={{ marginTop: "20px" }}>
        <Col span={12}>
          <Card title="Burn-down Chart">
            <Progress percent={80} strokeColor="red" />
            <p>Remaining work vs timeline</p>
          </Card>
        </Col>

        <Col span={12}>
          <Card title="Risk Indicator">
            <Tag
              color={
                riskLevel === "High"
                  ? "red"
                  : riskLevel === "Medium"
                  ? "orange"
                  : "green"
              }
            >
              {riskLevel} Risk
            </Tag>
          </Card>
        </Col>
      </Row>

      {/* ========================= */}
      {/* TASK + TIME + BILLING */}
      {/* ========================= */}
      <Row gutter={16} style={{ marginTop: "20px" }}>
        <Col span={8}>
          <Card title="Tasks Overview">
            <p>Total Tasks: 25</p>
            <p>Completed: 15</p>
            <p>Pending: 10</p>
          </Card>
        </Col>

        <Col span={8}>
          <Card title="Time Tracking">
            <p>Total Hours: 120</p>
            <p>Pending Approvals: 8</p>
          </Card>
        </Col>

        <Col span={8}>
          <Card title="Billing">
            <p>Invoices: 10</p>
            <p>Paid: 7</p>
            <p>Pending: 3</p>
          </Card>
        </Col>
      </Row>

      {/* ========================= */}
      {/* NAVIGATION */}
      {/* ========================= */}
      <Card style={{ marginTop: "20px" }}>
        <Button
          type="primary"
          onClick={() => navigate("/dashboard/gantt")}
        >
          View Gantt Timeline 📅
        </Button>
      </Card>

      {/* ========================= */}
      {/* PROJECT LIST SNAPSHOT */}
      {/* ========================= */}
      <Card
        title="Recent Projects"
        style={{ marginTop: "20px" }}
      >
        {projects.length === 0 && <p>No projects found</p>}

        {projects.map((p, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "10px",
            }}
          >
            <span>{p.name}</span>
            <Tag>{p.status || "New"}</Tag>
          </div>
        ))}
      </Card>
    </div>
  );
}

export default ProjectDashboard;