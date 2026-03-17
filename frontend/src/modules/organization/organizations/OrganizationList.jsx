import React, { useState } from "react";
import { Table, Button, Card, Input } from "antd";

function OrganizationList() {
  const [orgs, setOrgs] = useState([
    { name: "Company A" },
    { name: "Company B" },
  ]);

  const [newOrg, setNewOrg] = useState("");

  const addOrg = () => {
    if (!newOrg) return;
    setOrgs([...orgs, { name: newOrg }]);
    setNewOrg("");
  };

  return (
    <Card title="Organizations 🏢">

      <div style={{ marginBottom: 16, display: "flex", gap: 10 }}>
        <Input
          placeholder="New Organization"
          value={newOrg}
          onChange={(e) => setNewOrg(e.target.value)}
        />
        <Button type="primary" onClick={addOrg}>
          Create
        </Button>
      </div>

      <Table
        dataSource={orgs}
        columns={[{ title: "Organization Name", dataIndex: "name" }]}
        rowKey="name"
      />
    </Card>
  );
}

export default OrganizationList;