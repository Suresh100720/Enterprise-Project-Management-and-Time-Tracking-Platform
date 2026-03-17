import React, { useState } from "react";
import { Card, Input, Button, message } from "antd";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [emailInput, setEmailInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");

  const handleLogin = () => {
    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (
      storedUser &&
      storedUser.email === emailInput &&
      storedUser.password === passwordInput
    ) {
      localStorage.setItem("isAuth", true);

      message.success("Login successful 🚀");

      // 👇 GO TO HOME PAGE FIRST
      navigate("/dashboard/home");
    } else {
      message.error("Invalid credentials");
    }
  };

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(to right, #e3f2fd, #fce4ec)",
      }}
    >
      <Card style={{ width: 350, borderRadius: "10px" }}>
        <h2 style={{ textAlign: "center" }}>Login</h2>

        <Input
          placeholder="Email"
          value={emailInput}
          onChange={(e) => setEmailInput(e.target.value)}
          style={{ marginBottom: "10px" }}
        />

        <Input.Password
          placeholder="Password"
          value={passwordInput}
          onChange={(e) => setPasswordInput(e.target.value)}
          style={{ marginBottom: "10px" }}
        />

        <Button type="primary" block onClick={handleLogin}>
          Login
        </Button>

        {/* REGISTER BUTTON */}
        <Button
          block
          style={{ marginTop: "10px" }}
          onClick={() => navigate("/register")}
        >
          Create New Account
        </Button>
      </Card>
    </div>
  );
}

export default Login;