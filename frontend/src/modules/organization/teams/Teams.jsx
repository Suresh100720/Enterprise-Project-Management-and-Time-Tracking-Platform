import React, { useState } from "react";
import { Table, Button, Card, Input, Select, Tag } from "antd";
import { usePermissions } from "../../../hooks/usePermissions";

const { Option } = Select;

function Teams() {
  const { canManageTeams } = usePermissions();

  const [teams, setTeams] = useState([
    {
      name: "Frontend Team",
      department: "Engineering",
      lead: "Suresh",
      members: 5,
      skills: ["React", "UI"],
    },
    {
      name: "Backend Team",
      department: "Engineering",
      lead: "Ravi",
      members: 4,
      skills: ["Node.js", "MongoDB"],
    },
  ]);

  const [teamName, setTeamName] = useState("");
  const [department, setDepartment] = useState("");
  const [lead, setLead] = useState("");

  // Create Team
  const addTeam = () => {
    if (!teamName || !department || !lead) return;

    const newTeam = {
      name: teamName,
      department,
      lead,
      members: 0,
      skills: [],
    };

    setTeams([...teams, newTeam]);

    setTeamName("");
    setDepartment("");
    setLead("");
  };

  // Table Columns
  const columns = [
    {
      title: "Team Name",
      dataIndex: "name",
    },
    {
      title: "Department",
      dataIndex: "department",
    },
    {
      title: "Team Lead",
      dataIndex: "lead",
    },
    {
      title: "Members",
      dataIndex: "members",
    },
    {
      title: "Skills",
      dataIndex: "skills",
      render: (skills) =>
        skills.map((skill, index) => (
          <Tag color="blue" key={index}>
            {skill}
          </Tag>
        )),
    },
  ];

  return (
    <Card title="Team & Department Management 👨‍👩‍👧‍👦">

      {/* RBAC: Only Admin/Manager can create team */}
      {canManageTeams && (
        <div
          style={{
            marginBottom: "16px",
            display: "flex",
            gap: "10px",
            flexWrap: "wrap",
          }}
        >
          <Input
            placeholder="Team Name"
            value={teamName}
            onChange={(e) => setTeamName(e.target.value)}
          />

          <Input
            placeholder="Department"
            value={department}
            onChange={(e) => setDepartment(e.target.value)}
          />

          <Input
            placeholder="Team Lead"
            value={lead}
            onChange={(e) => setLead(e.target.value)}
          />

          <Button type="primary" onClick={addTeam}>
            Create Team
          </Button>
        </div>
      )}

      {/* Teams Table */}
      <Table
        dataSource={teams}
        columns={columns}
        rowKey="name"
      />
    </Card>
  );
}

export default Teams;