import React from "react";
import { List } from "antd";

function Milestones() {

  const milestones = [
    "Design Phase",
    "Development Phase",
    "Testing Phase"
  ];

  return (
    <div>

      <h2>Milestones</h2>

      <List
        bordered
        dataSource={milestones}
        renderItem={(item) => <List.Item>{item}</List.Item>}
      />

    </div>
  );
}

export default Milestones;