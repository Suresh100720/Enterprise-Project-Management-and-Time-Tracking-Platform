import React, { useState, useEffect } from "react";
import { Table, Button, Card, Popconfirm, message, Tag } from "antd";
import { useNavigate } from "react-router-dom";

function ProjectList() {
  const navigate = useNavigate();
  const [projects, setProjects] = useState([]);

  // =========================
  // LOAD PROJECTS
  // =========================
  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("projects")) || [];

    const defaultData = [
      {
        name: "Project A",
        status: "In Progress",
        budget: "$5000",
        category: "Web",
        team: ["Frontend Team"],
      },
      {
        name: "Project B",
        status: "Completed",
        budget: "$8000",
        category: "Mobile",
        team: ["Backend Team"],
      },
    ];

    setProjects([...defaultData, ...stored]);
  }, []);

  // =========================
  // DELETE PROJECT
  // =========================
  const deleteProject = (index) => {
    const stored = JSON.parse(localStorage.getItem("projects")) || [];

    // Remove only user-created projects
    stored.splice(index - 2, 1);

    localStorage.setItem("projects", JSON.stringify(stored));

    message.success("Project deleted");

    window.location.reload();
  };

  // =========================
  // TABLE COLUMNS
  // =========================
  const columns = [
    {
      title: "Project Name",
      dataIndex: "name",
    },
    {
      title: "Category",
      dataIndex: "category",
      render: (cat) => <Tag color="blue">{cat}</Tag>,
    },
    {
      title: "Team",
      render: (record) =>
        record.team?.map((t, i) => (
          <Tag key={i} color="purple">
            {t}
          </Tag>
        )),
    },
    {
      title: "Budget",
      dataIndex: "budget",
    },
    {
      title: "Status",
      dataIndex: "status",
      render: (status) => (
        <Tag
          color={
            status === "Completed"
              ? "green"
              : status === "In Progress"
              ? "orange"
              : "blue"
          }
        >
          {status}
        </Tag>
      ),
    },
    {
      title: "Actions",
      render: (_, record, index) => {
        if (index < 2) return null; // protect default data

        return (
          <Popconfirm
            title="Delete this project?"
            onConfirm={() => deleteProject(index)}
          >
            <Button danger size="small">
              Delete
            </Button>
          </Popconfirm>
        );
      },
    },
  ];

  return (
    <Card title="Projects 📁">

      {/* CREATE BUTTON */}
      <Button
        type="primary"
        onClick={() => navigate("/dashboard/projects/create")}
        style={{ marginBottom: "16px" }}
      >
        + Create Project
      </Button>

      {/* TABLE */}
      <Table
        dataSource={projects}
        columns={columns}
        rowKey={(record, index) => index}
      />

    </Card>
  );
}

export default ProjectList;