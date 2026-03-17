import React from "react";
import { Table } from "antd";

function TeamTable({ teams }) {

  const columns = [
    {
      title: "Team Name",
      dataIndex: "name"
    },
    {
      title: "Department",
      dataIndex: "department"
    },
    {
      title: "Team Lead",
      dataIndex: "lead"
    },
    {
      title: "Members",
      dataIndex: "memberCount"
    }
  ];

  return (
    <Table
      columns={columns}
      dataSource={teams}
      rowKey="_id"
      bordered
    />
  );
}

export default TeamTable;