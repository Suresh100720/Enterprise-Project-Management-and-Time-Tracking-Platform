import React from "react";
import { Form, Input, Button, Card, Select, message } from "antd";

const { Option } = Select;

function InviteUser() {

  const onFinish = (values) => {
    console.log("Invite Sent:", values);
    message.success("Invitation sent (simulated)");
  };

  return (
    <Card title="Invite User ✉️">

      <Form layout="vertical" onFinish={onFinish}>

        <Form.Item name="email" label="Email" rules={[{ required: true }]}>
          <Input placeholder="Enter email" />
        </Form.Item>

        <Form.Item name="role" label="Role">
          <Select>
            <Option value="Admin">Admin</Option>
            <Option value="Manager">Manager</Option>
            <Option value="TeamMember">Team Member</Option>
          </Select>
        </Form.Item>

        <Button type="primary" htmlType="submit">
          Send Invite
        </Button>

      </Form>
    </Card>
  );
}

export default InviteUser;