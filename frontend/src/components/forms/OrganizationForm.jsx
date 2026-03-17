import React from "react";
import { Form, Input, Button } from "antd";

function OrganizationForm({ onSubmit }) {

  const handleSubmit = (formValues) => {
    if (onSubmit) {
      onSubmit(formValues);
    }
  };

  return (
    <Form layout="vertical" onFinish={handleSubmit}>

      <Form.Item
        label="Organization Name"
        name="name"
        rules={[{ required: true, message: "Please enter organization name" }]}
      >
        <Input placeholder="Enter organization name" />
      </Form.Item>

      <Form.Item
        label="Domain"
        name="domain"
        rules={[{ required: true, message: "Please enter organization domain" }]}
      >
        <Input placeholder="example.com" />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          Create Organization
        </Button>
      </Form.Item>

    </Form>
  );
}

export default OrganizationForm;