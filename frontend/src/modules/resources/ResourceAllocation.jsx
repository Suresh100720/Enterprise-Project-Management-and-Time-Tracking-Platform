import React, { useEffect, useState } from "react";
import { Form, Select, Button, message } from "antd";

import DataTable from "../../components/tables/DataTable";
import apiClient from "../../config/apiConfig";

const { Option } = Select;

function ResourceAllocation() {

  const [allocations, setAllocations] = useState([]);
  const [users, setUsers] = useState([]);
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetchAllocations();
    fetchUsers();
    fetchProjects();
  }, []);

  const fetchAllocations = async () => {
    const response = await apiClient.get("/resource-allocations");
    setAllocations(response.data);
  };

  const fetchUsers = async () => {
    const response = await apiClient.get("/users");
    setUsers(response.data);
  };

  const fetchProjects = async () => {
    const response = await apiClient.get("/projects");
    setProjects(response.data);
  };

  const handleAllocation = async (allocationData) => {

    try {

      await apiClient.post("/resource-allocations", allocationData);

      message.success("Resource allocated");

      fetchAllocations();

    } catch (error) {
      message.error("Allocation failed");
    }
  };

  const columns = [
    { title: "User", dataIndex: "user" },
    { title: "Project", dataIndex: "project" }
  ];

  return (
    <div>

      <h2>Resource Allocation</h2>

      <Form
        layout="inline"
        onFinish={handleAllocation}
        style={{ marginBottom: 20 }}
      >

        <Form.Item name="user" rules={[{ required: true }]}>
          <Select placeholder="Select User" style={{ width: 200 }}>
            {users.map((user) => (
              <Option key={user._id} value={user._id}>
                {user.name}
              </Option>
            ))}
          </Select>
        </Form.Item>

        <Form.Item name="project" rules={[{ required: true }]}>
          <Select placeholder="Select Project" style={{ width: 200 }}>
            {projects.map((project) => (
              <Option key={project._id} value={project._id}>
                {project.name}
              </Option>
            ))}
          </Select>
        </Form.Item>

        <Button type="primary" htmlType="submit">
          Allocate
        </Button>

      </Form>

      <DataTable columns={columns} data={allocations} />

    </div>
  );
}

export default ResourceAllocation;