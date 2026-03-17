import React, { useState } from "react";
import { Card, Input, Button, Table, Select, Tag, message } from "antd";
import { usePermissions } from "../../hooks/usePermissions";

const { Option } = Select;

function TimeEntries() {
  const { role, isProjectManager, isTeamMember } = usePermissions();

  // =========================
  // STATE
  // =========================
  const [entries, setEntries] = useState([
    {
      id: 1,
      user: "Ravi",
      task: "API Development",
      hours: 5,
      status: "Pending",
    },
  ]);

  const [task, setTask] = useState("");
  const [hours, setHours] = useState("");

  // =========================
  // ADD TIME ENTRY
  // =========================
  const addEntry = () => {
    if (!task || !hours) {
      message.warning("Fill all fields");
      return;
    }

    const newEntry = {
      id: Date.now(),
      user: "Current User",
      task,
      hours,
      status: "Pending",
    };

    setEntries([...entries, newEntry]);

    setTask("");
    setHours("");

    message.success("Time logged successfully");
  };

  // =========================
  // APPROVE TIMESHEET
  // =========================
  const approveEntry = (id) => {
    const updated = entries.map((entry) =>
      entry.id === id ? { ...entry, status: "Approved" } : entry
    );

    setEntries(updated);
    message.success("Approved");
  };

  // =========================
  // TABLE COLUMNS
  // =========================
  const columns = [
    {
      title: "User",
      dataIndex: "user",
    },
    {
      title: "Task",
      dataIndex: "task",
    },
    {
      title: "Hours",
      dataIndex: "hours",
    },
    {
      title: "Status",
      dataIndex: "status",
      render: (status) => (
        <Tag color={status === "Approved" ? "green" : "orange"}>
          {status}
        </Tag>
      ),
    },
  ];

  // Add approval column for manager
  if (isProjectManager) {
    columns.push({
      title: "Action",
      render: (_, record) =>
        record.status === "Pending" && (
          <Button onClick={() => approveEntry(record.id)}>
            Approve
          </Button>
        ),
    });
  }

  return (
    <div style={{ padding: "10px" }}>
      <h2>Time Tracking & Timesheets ⏱️</h2>

      {/* ========================= */}
      {/* LOG TIME (TEAM MEMBER) */}
      {/* ========================= */}
      {isTeamMember && (
        <Card style={{ marginBottom: "20px" }}>
          <div style={{ display: "flex", gap: "10px" }}>

            <Input
              placeholder="Task Name"
              value={task}
              onChange={(e) => setTask(e.target.value)}
            />

            <Input
              placeholder="Hours"
              type="number"
              value={hours}
              onChange={(e) => setHours(e.target.value)}
            />

            <Button type="primary" onClick={addEntry}>
              Log Time
            </Button>

          </div>
        </Card>
      )}

      {/* ========================= */}
      {/* TIMESHEET TABLE */}
      {/* ========================= */}
      <Card title="Timesheets">

        <Table
          dataSource={entries}
          columns={columns}
          rowKey="id"
        />

      </Card>
    </div>
  );
}

export default TimeEntries;