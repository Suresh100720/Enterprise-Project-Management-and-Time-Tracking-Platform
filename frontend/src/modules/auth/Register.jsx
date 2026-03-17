import React, { useState } from "react";
import { Form, Input, Button, Card, Typography } from "antd";
import { useNavigate } from "react-router-dom";

const { Title, Text } = Typography;

function Register() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const onFinish = (values) => {
    setLoading(true);

    // Save user locally (temporary)
    localStorage.setItem("user", JSON.stringify(values));

    setTimeout(() => {
      alert("Registration successful!");
      navigate("/login");
      setLoading(false);
    }, 800);
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gradient-to-r from-purple-500 to-pink-500">

      <Card className="w-96 shadow-2xl rounded-2xl p-6">

        <div className="text-center mb-6">
          <Title level={3}>Create Account 🚀</Title>
          <Text type="secondary">Register to get started</Text>
        </div>

        <Form layout="vertical" onFinish={onFinish}>

          <Form.Item
            label="Name"
            name="name"
            rules={[{ required: true, message: "Enter your name" }]}
          >
            <Input placeholder="Enter your name" size="large" />
          </Form.Item>

          <Form.Item
            label="Email"
            name="email"
            rules={[
              { required: true, message: "Enter email" },
              { type: "email", message: "Enter valid email" }
            ]}
          >
            <Input placeholder="Enter your email" size="large" />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[
              { required: true, message: "Enter password" },
              { min: 6, message: "Minimum 6 characters" }
            ]}
          >
            <Input.Password placeholder="Enter password" size="large" />
          </Form.Item>

          <Form.Item
            label="Confirm Password"
            name="confirmPassword"
            dependencies={["password"]}
            rules={[
              { required: true, message: "Confirm your password" },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("password") === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject("Passwords do not match");
                }
              })
            ]}
          >
            <Input.Password placeholder="Confirm password" size="large" />
          </Form.Item>

          <Button
            type="primary"
            htmlType="submit"
            block
            size="large"
            loading={loading}
            className="mt-2"
          >
            Register
          </Button>

        </Form>

        <div className="text-center mt-4">
          <Text>
            Already have an account?{" "}
            <span
              className="text-blue-500 cursor-pointer"
              onClick={() => navigate("/login")}
            >
              Login
            </span>
          </Text>
        </div>

      </Card>
    </div>
  );
}

export default Register;