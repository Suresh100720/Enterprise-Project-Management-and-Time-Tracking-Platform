import React from "react";
import { Form, Input, Button, Select, InputNumber } from "antd";

const { Option } = Select;

function ProjectForm({ onSubmit }) {

  const handleSubmit = (formData) => {
    if (onSubmit) {
      onSubmit(formData);
    }
  };

  return (
    <Form layout="vertical" onFinish={handleSubmit}>

      <Form.Item
        label="Project Name"
        name="name"
        rules={[{ required: true, message: "Enter project name" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item label="Description" name="description">
        <Input.TextArea rows={3} />
      </Form.Item>

      <Form.Item label="Budget Type" name="budgetType">
        <Select placeholder="Select type">
          <Option value="fixed">Fixed Price</Option>
          <Option value="hourly">Hourly</Option>
        </Select>
      </Form.Item>

      <Form.Item label="Budget Amount" name="budget">
        <InputNumber style={{ width: "100%" }} />
      </Form.Item>

      <Form.Item label="Category" name="category">
        <Input placeholder="Web, Mobile, AI etc" />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          Create Project
        </Button>
      </Form.Item>

    </Form>
  );
}

export default ProjectForm;