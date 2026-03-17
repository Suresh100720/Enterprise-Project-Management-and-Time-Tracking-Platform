import React from "react";
import { Layout } from "antd";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/common/Sidebar";
import HeaderBar from "../components/common/Header";

const { Content } = Layout;

function ClientLayout() {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sidebar />

      <Layout>
        <HeaderBar />

        <Content style={{ margin: "20px" }}>
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
}

export default ClientLayout;