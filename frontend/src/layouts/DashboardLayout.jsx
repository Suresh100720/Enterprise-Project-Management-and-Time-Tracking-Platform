import React from "react";
import { Layout } from "antd";
import Sidebar from "../components/common/Sidebar";
import HeaderBar from "../components/common/Header";
import { Outlet } from "react-router-dom";

const { Content } = Layout;

function DashboardLayout() {
  return (
    <Layout>

      {/* SIDEBAR */}
      <Sidebar />

      {/* MAIN AREA */}
      <Layout
        style={{
          marginLeft: 220, // ✅ IMPORTANT FIX
          minHeight: "100vh",
        }}
      >

        {/* HEADER */}
        <HeaderBar />

        {/* CONTENT */}
        <Content
          style={{
            margin: "16px",
            padding: "16px",
            background: "#f5f7fa",
            minHeight: "calc(100vh - 64px)",
          }}
        >
          <Outlet />
        </Content>

      </Layout>
    </Layout>
  );
}

export default DashboardLayout;