import React from "react";
import { Form, Input, Button, DatePicker } from "antd";

function AvailabilityForm() {

  const handleSubmit = (availabilityData) => {
    console.log(availabilityData);
  };

  return (
    <Form layout="vertical" onFinish={handleSubmit}>

      <Form.Item label="User" name="user">
        <Input />
      </Form.Item>

      <Form.Item label="Start Date" name="start">
        <DatePicker />
      </Form.Item>

      <Form.Item label="End Date" name="end">
        <DatePicker />
      </Form.Item>

      <Button type="primary" htmlType="submit">
        Save
      </Button>

    </Form>
  );
}

export default AvailabilityForm;