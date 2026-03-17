import React from "react";
import { Layout, Button, Avatar } from "antd";
import { useNavigate } from "react-router-dom";

const { Header } = Layout;

function HeaderBar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("isAuth");
    navigate("/login");
  };

  return (
    <Header
      style={{
        background: "skyblue",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 20px",
        borderBottom: "1px solid #eee",
      }}
    >

      {/* LEFT (EMPTY FOR SPACING) */}
      <div style={{ width: "150px" }} />

      {/* CENTER TITLE */}
      <h2 style={{ margin: 0, fontWeight: "600", backgroundColor:"skyblue"}}>
        Enterprise Project Platform
      </h2>

      {/* RIGHT SIDE */}
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <Avatar style={{ backgroundColor: "#1677ff" }}>R</Avatar>
        <span>Ram</span>

        <Button danger onClick={handleLogout}>
          Logout
        </Button>
      </div>

    </Header>
  );
}

export default HeaderBar;