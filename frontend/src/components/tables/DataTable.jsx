import React from "react";
import { Table } from "antd";

function DataTable({ columns, data, loading }) {

  const paginationConfig = {
    pageSize: 10,
    showSizeChanger: true
  };

  return (
    <Table
      columns={columns}
      dataSource={data}
      loading={loading}
      pagination={paginationConfig}
      rowKey="_id"
      bordered
    />
  );
}

export default DataTable;