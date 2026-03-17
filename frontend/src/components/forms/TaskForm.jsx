import React from "react";
import { Form, Input, Button, Select, DatePicker } from "antd";

const { Option } = Select;

function TaskForm({ onSubmit }) {

  const handleSubmit = (taskValues) => {
    if (onSubmit) {
      onSubmit(taskValues);
    }
  };

  return (
    <Form layout="vertical" onFinish={handleSubmit}>

      <Form.Item
        label="Task Title"
        name="title"
        rules={[{ required: true, message: "Enter task title" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item label="Description" name="description">
        <Input.TextArea rows={3} />
      </Form.Item>

      <Form.Item label="Priority" name="priority">
        <Select>
          <Option value="low">Low</Option>
          <Option value="medium">Medium</Option>
          <Option value="high">High</Option>
        </Select>
      </Form.Item>

      <Form.Item label="Due Date" name="dueDate">
        <DatePicker style={{ width: "100%" }} />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          Create Task
        </Button>
      </Form.Item>

    </Form>
  );
}

export default TaskForm;