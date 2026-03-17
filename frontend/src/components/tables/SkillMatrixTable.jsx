import React from "react";
import { Table } from "antd";

function SkillMatrixTable({ skills }) {

  const columns = [
    {
      title: "User",
      dataIndex: "name"
    },
    {
      title: "React",
      dataIndex: "react"
    },
    {
      title: "Node",
      dataIndex: "node"
    },
    {
      title: "Python",
      dataIndex: "python"
    },
    {
      title: "DevOps",
      dataIndex: "devops"
    }
  ];

  return (
    <Table
      columns={columns}
      dataSource={skills}
      rowKey="_id"
      bordered
      pagination={false}
    />
  );
}

export default SkillMatrixTable;