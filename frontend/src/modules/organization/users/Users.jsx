import React, { useState } from "react";
import { Table, Button, Card, Input, Select, Tag, message } from "antd";
import { usePermissions } from "../../../hooks/usePermissions";

const { Option } = Select;

function Users() {
  const { canManageUsers } = usePermissions();

  const [users, setUsers] = useState([
    {
      name: "Suresh",
      role: "OrganizationAdmin",
      organization: "Company A",
      skills: ["React", "Node"],
      availability: "Available",
    },
    {
      name: "Ravi",
      role: "TeamMember",
      organization: "Company A",
      skills: ["MongoDB"],
      availability: "Busy",
    },
  ]);

  const [name, setName] = useState("");
  const [role, setRole] = useState("TeamMember");
  const [organization, setOrganization] = useState("");

  // ✅ Add User (RBAC controlled)
  const addUser = () => {
    if (!name || !organization) {
      message.warning("Please fill all fields");
      return;
    }

    const newUser = {
      name,
      role,
      organization,
      skills: [],
      availability: "Available",
    };

    setUsers([...users, newUser]);

    setName("");
    setOrganization("");

    message.success("User added successfully");
  };

  // ✅ Simulated Invite User
  const inviteUser = () => {
    message.success("Invitation sent (email simulation)");
  };

  // ✅ Table Columns
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
    },
    {
      title: "Role",
      dataIndex: "role",
      render: (role) => <Tag color="blue">{role}</Tag>,
    },
    {
      title: "Organization",
      dataIndex: "organization",
    },
    {
      title: "Skills",
      dataIndex: "skills",
      render: (skills) =>
        skills.map((skill, i) => (
          <Tag key={i} color="green">
            {skill}
          </Tag>
        )),
    },
    {
      title: "Availability",
      dataIndex: "availability",
      render: (status) => (
        <Tag color={status === "Available" ? "green" : "red"}>
          {status}
        </Tag>
      ),
    },
  ];

  return (
    <Card title="Users & Organization Management 👥">

      {/* RBAC: Only Admin can manage users */}
      {canManageUsers && (
        <div
          style={{
            marginBottom: "16px",
            display: "flex",
            gap: "10px",
            flexWrap: "wrap",
          }}
        >
          <Input
            placeholder="User Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <Select value={role} onChange={setRole} style={{ width: 180 }}>
            <Option value="OrganizationAdmin">Admin</Option>
            <Option value="ProjectManager">Manager</Option>
            <Option value="TeamMember">Team Member</Option>
            <Option value="Client">Client</Option>
          </Select>

          <Input
            placeholder="Organization"
            value={organization}
            onChange={(e) => setOrganization(e.target.value)}
          />

          <Button type="primary" onClick={addUser}>
            Add User
          </Button>

          <Button onClick={inviteUser}>
            Invite User
          </Button>
        </div>
      )}

      {/* Users Table */}
      <Table
        dataSource={users}
        columns={columns}
        rowKey="name"
      />
    </Card>
  );
}

export default Users;