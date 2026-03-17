import React from "react";
import { Table } from "antd";

function RolesPermissions() {

  const roleData = [
    { role: "OrganizationAdmin", permissions: "Manage Users, Projects" },
    { role: "ProjectManager", permissions: "Manage Tasks" },
    { role: "TeamMember", permissions: "Update Tasks" },
    { role: "Client", permissions: "View Projects" }
  ];

  const columns = [
    { title: "Role", dataIndex: "role" },
    { title: "Permissions", dataIndex: "permissions" }
  ];

  return (
    <Table
      columns={columns}
      dataSource={roleData}
      rowKey="role"
    />
  );
}

export default RolesPermissions;