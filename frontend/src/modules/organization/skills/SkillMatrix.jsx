import React from "react";
import { Table, Card } from "antd";

function SkillMatrix() {
  const data = [
    { name: "Suresh", skill: "React", level: "Advanced" },
    { name: "Ravi", skill: "Node.js", level: "Intermediate" },
  ];

  return (
    <Card title="Skill Matrix 🧠">
      <Table
        dataSource={data}
        columns={[
          { title: "Name", dataIndex: "name" },
          { title: "Skill", dataIndex: "skill" },
          { title: "Level", dataIndex: "level" },
        ]}
        rowKey="name"
      />
    </Card>
  );
}

export default SkillMatrix;