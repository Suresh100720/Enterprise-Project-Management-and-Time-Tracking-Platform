import React, { useState } from "react";
import { Table, Card, Input, Button, Progress, Select } from "antd";

const { Option } = Select;

function GanttChart() {

  // =========================
  // STATE
  // =========================
  const [tasks, setTasks] = useState([
    {
      id: 1,
      name: "Design UI",
      start: "2026-03-01",
      end: "2026-03-05",
      progress: 70,
      dependency: "-",
    },
    {
      id: 2,
      name: "Development",
      start: "2026-03-06",
      end: "2026-03-15",
      progress: 50,
      dependency: "Design UI",
    },
  ]);

  const [name, setName] = useState("");
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");
  const [dependency, setDependency] = useState("");

  // =========================
  // ADD TASK
  // =========================
  const addTask = () => {
    if (!name || !start || !end) return;

    const newTask = {
      id: Date.now(),
      name,
      start,
      end,
      progress: 0,
      dependency: dependency || "-",
    };

    setTasks([...tasks, newTask]);

    setName("");
    setStart("");
    setEnd("");
    setDependency("");
  };

  // =========================
  // TABLE COLUMNS
  // =========================
  const columns = [
    {
      title: "Task",
      dataIndex: "name",
    },
    {
      title: "Start Date",
      dataIndex: "start",
    },
    {
      title: "End Date",
      dataIndex: "end",
    },
    {
      title: "Dependency",
      dataIndex: "dependency",
    },
    {
      title: "Progress",
      render: (_, record) => (
        <Progress percent={record.progress} size="small" />
      ),
    },
  ];

  return (
    <div style={{ padding: "10px" }}>

      <h2>Gantt Chart (Project Timeline) 📅</h2>

      {/* ========================= */}
      {/* ADD TASK */}
      {/* ========================= */}
      <Card style={{ marginBottom: "20px" }}>

        <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>

          <Input
            placeholder="Task Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <Input
            type="date"
            value={start}
            onChange={(e) => setStart(e.target.value)}
          />

          <Input
            type="date"
            value={end}
            onChange={(e) => setEnd(e.target.value)}
          />

          <Select
            placeholder="Dependency"
            value={dependency}
            onChange={setDependency}
            style={{ width: 180 }}
          >
            {tasks.map((task) => (
              <Option key={task.id} value={task.name}>
                {task.name}
              </Option>
            ))}
          </Select>

          <Button type="primary" onClick={addTask}>
            Add Task
          </Button>

        </div>

      </Card>

      {/* ========================= */}
      {/* GANTT TABLE */}
      {/* ========================= */}
      <Card title="Timeline View">

        <Table
          dataSource={tasks}
          columns={columns}
          rowKey="id"
        />

      </Card>

    </div>
  );
}

export default GanttChart;