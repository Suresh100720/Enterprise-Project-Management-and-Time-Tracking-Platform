import React from "react";
import { Layout } from "antd";
import { Outlet } from "react-router-dom";

const { Content } = Layout;

function AuthLayout() {
  return (
    <Layout style={{ minHeight: "100vh", background: "#f5f7fa" }}>
      <Content
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <div
          style={{
            width: "400px",
            padding: "40px",
            background: "#fff",
            borderRadius: "8px",
            boxShadow: "0 2px 10px rgba(0,0,0,0.1)"
          }}
        >
          <Outlet />
        </div>
      </Content>
    </Layout>
  );
}

export default AuthLayout;