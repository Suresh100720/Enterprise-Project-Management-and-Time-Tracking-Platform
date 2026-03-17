import React, { useState } from "react";
import { Form, Input, Button, message } from "antd";

import apiClient from "../../config/apiConfig";

function ForgotPassword() {

  const [loadingState, setLoadingState] = useState(false);

  const handleSubmit = async (emailData) => {

    try {

      setLoadingState(true);

      await apiClient.post(
        "/auth/forgot-password",
        emailData
      );

      message.success(
        "Password reset link sent to your email"
      );

    } catch (errorObject) {

      message.error(
        errorObject.response?.data?.message ||
        "Request failed"
      );

    } finally {
      setLoadingState(false);
    }
  };

  return (
    <div>

      <h2 style={{ textAlign: "center", marginBottom: 20 }}>
        Forgot Password
      </h2>

      <Form layout="vertical" onFinish={handleSubmit}>

        <Form.Item
          label="Email"
          name="email"
          rules={[
            { required: true },
            { type: "email" }
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            block
            loading={loadingState}
          >
            Send Reset Link
          </Button>
        </Form.Item>

      </Form>

    </div>
  );
}

export default ForgotPassword;