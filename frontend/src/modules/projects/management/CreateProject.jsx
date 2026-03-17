import React, { useState } from "react";
import {
  Form,
  Input,
  Button,
  Select,
  Card,
  Space,
  message,
} from "antd";

const { Option } = Select;

function CreateProject() {
  const [form] = Form.useForm();
  const [customFields, setCustomFields] = useState([]);

  // =========================
  // ADD CUSTOM FIELD
  // =========================
  const addCustomField = () => {
    setCustomFields([...customFields, { key: "", value: "" }]);
  };

  // =========================
  // CREATE PROJECT
  // =========================
  const onFinish = (values) => {
    const existing =
      JSON.parse(localStorage.getItem("projects")) || [];

    const newProject = {
      name: values.name,
      template: values.template,
      budgetType: values.budgetType,
      budget: values.budget,
      milestones: values.milestones || [],
      team: values.team || [],
      category: values.category,
      tags: values.tags || [],
      status: "New",
    };

    const updated = [...existing, newProject];

    localStorage.setItem("projects", JSON.stringify(updated));

    message.success("Project Created Successfully 🚀");

    window.location.href = "/dashboard/projects";
  };

  return (
    <Card title="Create Project 🚀">

      <Form layout="vertical" form={form} onFinish={onFinish}>

        {/* Project Name */}
        <Form.Item
          label="Project Name"
          name="name"
          rules={[{ required: true }]}
        >
          <Input placeholder="Enter project name" />
        </Form.Item>

        {/* Template */}
        <Form.Item label="Project Template" name="template">
          <Select placeholder="Select template">
            <Option value="Agile">Agile</Option>
            <Option value="Scrum">Scrum</Option>
            <Option value="Waterfall">Waterfall</Option>
          </Select>
        </Form.Item>

        {/* Budget Type */}
        <Form.Item
          label="Budget Type"
          name="budgetType"
          rules={[{ required: true }]}
        >
          <Select>
            <Option value="fixed">Fixed Price</Option>
            <Option value="hourly">Hourly</Option>
          </Select>
        </Form.Item>

        {/* Budget */}
        <Form.Item
          label="Budget"
          name="budget"
          rules={[{ required: true }]}
        >
          <Input placeholder="Enter budget" />
        </Form.Item>

        {/* Team */}
        <Form.Item label="Assign Team" name="team">
          <Select mode="multiple">
            <Option value="Frontend Team">Frontend Team</Option>
            <Option value="Backend Team">Backend Team</Option>
          </Select>
        </Form.Item>

        {/* Milestones */}
        <Form.Item label="Milestones" name="milestones">
          <Select mode="tags" placeholder="Add milestones" />
        </Form.Item>

        {/* Category */}
        <Form.Item label="Category" name="category">
          <Select>
            <Option value="Web">Web</Option>
            <Option value="Mobile">Mobile</Option>
          </Select>
        </Form.Item>

        {/* Tags */}
        <Form.Item label="Tags" name="tags">
          <Select mode="tags" />
        </Form.Item>

        {/* Custom Fields */}
        <div style={{ marginBottom: "16px" }}>
          <h4>Custom Fields</h4>

          {customFields.map((_, i) => (
            <Space key={i} style={{ marginBottom: "8px" }}>
              <Input placeholder="Field Name" />
              <Input placeholder="Value" />
            </Space>
          ))}

          <Button onClick={addCustomField}>
            + Add Field
          </Button>
        </div>

        <Button type="primary" htmlType="submit">
          Create Project
        </Button>

      </Form>
    </Card>
  );
}

export default CreateProject;