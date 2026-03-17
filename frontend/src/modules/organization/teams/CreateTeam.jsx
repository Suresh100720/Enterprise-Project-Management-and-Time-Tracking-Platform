import React from "react";
import { Form, Input, Button } from "antd";
import apiClient from "../../../config/apiConfig";

function CreateTeam() {

  const handleSubmit = async (teamData) => {
    await apiClient.post("/teams", teamData);
  };

  return (
    <div>

      <h2>Create Team</h2>

      <Form layout="vertical" onFinish={handleSubmit}>

        <Form.Item label="Team Name" name="name">
          <Input />
        </Form.Item>

        <Form.Item label="Department" name="department">
          <Input />
        </Form.Item>

        <Button type="primary" htmlType="submit">
          Create
        </Button>

      </Form>

    </div>
  );
}

export default CreateTeam;