import React from "react";
import { Form, Input, Button, Select } from "antd";

const { Option } = Select;

function InviteUserForm({ onSubmit }) {

  const handleSubmit = (inviteData) => {
    if (onSubmit) {
      onSubmit(inviteData);
    }
  };

  return (
    <Form layout="vertical" onFinish={handleSubmit}>

      <Form.Item
        label="Email"
        name="email"
        rules={[
          { required: true, message: "Enter email address" },
          { type: "email", message: "Enter valid email" }
        ]}
      >
        <Input placeholder="user@example.com" />
      </Form.Item>

      <Form.Item
        label="Role"
        name="role"
        rules={[{ required: true }]}
      >
        <Select>
          <Option value="OrganizationAdmin">Organization Admin</Option>
          <Option value="ProjectManager">Project Manager</Option>
          <Option value="TeamMember">Team Member</Option>
        </Select>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          Send Invitation
        </Button>
      </Form.Item>

    </Form>
  );
}

export default InviteUserForm;