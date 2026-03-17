import React, { useState } from "react";
import { Card, Button, Input, Select, Tag } from "antd";

const { Option } = Select;

function TaskBoard() {

  // =========================
  // STATE
  // =========================
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Design UI",
      status: "Todo",
      priority: "High",
      assignee: "Suresh",
      dependencies: [],
      subtasks: ["Create wireframe"],
    },
    {
      id: 2,
      title: "Build API",
      status: "In Progress",
      priority: "Medium",
      assignee: "Ravi",
      dependencies: ["Design UI"],
      subtasks: [],
    },
  ]);

  const [title, setTitle] = useState("");
  const [priority, setPriority] = useState("Medium");
  const [assignee, setAssignee] = useState("");

  // =========================
  // ADD TASK
  // =========================
  const addTask = () => {
    if (!title || !assignee) return;

    const newTask = {
      id: Date.now(),
      title,
      status: "Todo",
      priority,
      assignee,
      dependencies: [],
      subtasks: [],
    };

    setTasks([...tasks, newTask]);

    setTitle("");
    setAssignee("");
  };

  // =========================
  // MOVE TASK (KANBAN)
  // =========================
  const moveTask = (taskId, newStatus) => {
    const updated = tasks.map((task) =>
      task.id === taskId ? { ...task, status: newStatus } : task
    );

    setTasks(updated);
  };

  // =========================
  // GROUP TASKS
  // =========================
  const columns = ["Todo", "In Progress", "Done"];

  return (
    <div style={{ padding: "10px" }}>

      <h2>Task Management (Kanban Board) 📋</h2>

      {/* ========================= */}
      {/* CREATE TASK */}
      {/* ========================= */}
      <Card style={{ marginBottom: "20px" }}>

        <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>

          <Input
            placeholder="Task Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <Select
            value={priority}
            onChange={setPriority}
            style={{ width: 150 }}
          >
            <Option value="High">High</Option>
            <Option value="Medium">Medium</Option>
            <Option value="Low">Low</Option>
          </Select>

          <Input
            placeholder="Assign To"
            value={assignee}
            onChange={(e) => setAssignee(e.target.value)}
          />

          <Button type="primary" onClick={addTask}>
            Add Task
          </Button>

        </div>

      </Card>

      {/* ========================= */}
      {/* KANBAN BOARD */}
      {/* ========================= */}
      <div style={{ display: "flex", gap: "20px" }}>

        {columns.map((col) => (
          <div key={col} style={{ flex: 1 }}>

            <h3>{col}</h3>

            {tasks
              .filter((task) => task.status === col)
              .map((task) => (
                <Card
                  key={task.id}
                  style={{ marginBottom: "10px" }}
                >
                  <h4>{task.title}</h4>

                  <p>👤 {task.assignee}</p>

                  <Tag color={
                    task.priority === "High"
                      ? "red"
                      : task.priority === "Medium"
                      ? "orange"
                      : "green"
                  }>
                    {task.priority}
                  </Tag>

                  {/* Dependencies */}
                  {task.dependencies.length > 0 && (
                    <p>
                      🔗 Depends on: {task.dependencies.join(", ")}
                    </p>
                  )}

                  {/* Subtasks */}
                  {task.subtasks.length > 0 && (
                    <ul>
                      {task.subtasks.map((sub, i) => (
                        <li key={i}>{sub}</li>
                      ))}
                    </ul>
                  )}

                  {/* Move Buttons */}
                  <div style={{ marginTop: "10px" }}>
                    {col !== "Todo" && (
                      <Button
                        size="small"
                        onClick={() => moveTask(task.id, "Todo")}
                      >
                        ←
                      </Button>
                    )}

                    {col !== "Done" && (
                      <Button
                        size="small"
                        onClick={() =>
                          moveTask(
                            task.id,
                            col === "Todo" ? "In Progress" : "Done"
                          )
                        }
                        style={{ marginLeft: "5px" }}
                      >
                        →
                      </Button>
                    )}
                  </div>

                </Card>
              ))}
          </div>
        ))}

      </div>
    </div>
  );
}

export default TaskBoard;