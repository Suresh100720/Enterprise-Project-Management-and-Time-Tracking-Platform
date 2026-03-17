import React from "react";
import { Form, Input, Button } from "antd";

function SystemSettings() {

  const handleSubmit = (values) => {
    console.log("Settings:", values);
  };

  return (
    <div>

      <h2>System Settings</h2>

      <Form
        layout="vertical"
        onFinish={handleSubmit}
        style={{ maxWidth: 500 }}
      >

        <Form.Item
          label="Platform Name"
          name="platformName"
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Support Email"
          name="supportEmail"
        >
          <Input />
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
          >
            Save Settings
          </Button>
        </Form.Item>

      </Form>

    </div>
  );
}

export default SystemSettings;