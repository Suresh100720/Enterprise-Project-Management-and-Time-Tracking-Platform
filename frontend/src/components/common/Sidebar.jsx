import React from "react";
import { Layout, Menu } from "antd";
import {
  DashboardOutlined,
  ProjectOutlined,
  TeamOutlined,
  UserOutlined,
  ProfileOutlined,
  BarChartOutlined,
  ClockCircleOutlined,
  DollarOutlined,
  MessageOutlined,
} from "@ant-design/icons";
import { useNavigate, useLocation } from "react-router-dom";

const { Sider } = Layout;

function Sidebar() {
  const navigate = useNavigate();
  const location = useLocation();

  // =========================
  // MENU ITEMS
  // =========================
  const menuItems = [
    {
      key: "/dashboard/home",
      icon: <DashboardOutlined />,
      label: "Dashboard",
    },
    {
      key: "/dashboard/projects",
      icon: <ProjectOutlined />,
      label: "Projects",
    },
    {
      key: "/dashboard/teams",
      icon: <TeamOutlined />,
      label: "Teams",
    },
    {
      key: "/dashboard/users",
      icon: <UserOutlined />,
      label: "Users",
    },
    {
      key: "/dashboard/tasks",
      icon: <ProfileOutlined />,
      label: "Tasks",
    },
    {
      key: "/dashboard/gantt",
      icon: <BarChartOutlined />,
      label: "Gantt",
    },
    {
      key: "/dashboard/time",
      icon: <ClockCircleOutlined />,
      label: "Time Tracking",
    },
    {
      key: "/dashboard/billing",
      icon: <DollarOutlined />,
      label: "Billing",
    },
    {
      key: "/dashboard/chat",
      icon: <MessageOutlined />,
      label: "Chat",
    },
  ];

  return (
    <Sider
  width={220}
  style={{
    background: "#001529",
    height: "100vh",
    position: "fixed",
    left: 0,
    top: 0,
    overflow: "auto", // ✅ prevent overflow issues
  }}
    >
      {/* ========================= */}
      {/* LOGO */}
      {/* ========================= */}
      <div
        style={{
          color: "white",
          textAlign: "center",
          padding: "16px",
          fontSize: "18px",
          fontWeight: "bold",
        }}
      >
        🚀 EPM
      </div>

      {/* ========================= */}
      {/* MENU */}
      {/* ========================= */}
      <Menu
        theme="dark"
        mode="inline"
        selectedKeys={[location.pathname]}
        items={menuItems}
        onClick={({ key }) => navigate(key)}
      />
    </Sider>
  );
}

export default Sidebar;