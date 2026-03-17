import React, { useEffect, useState } from "react";
import { Button } from "antd";

import DataTable from "../../components/tables/DataTable";
import apiClient from "../../config/apiConfig";

function Organizations() {

  const [organizations, setOrganizations] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchOrganizations();
  }, []);

  const fetchOrganizations = async () => {

    try {

      setLoading(true);

      const response = await apiClient.get(
        "/organizations"
      );

      setOrganizations(response.data);

    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const columns = [
    {
      title: "Name",
      dataIndex: "name"
    },
    {
      title: "Domain",
      dataIndex: "domain"
    },
    {
      title: "Created At",
      dataIndex: "createdAt"
    }
  ];

  return (
    <div>

      <h2>Organizations</h2>

      <Button
        type="primary"
        style={{ marginBottom: 20 }}
      >
        Create Organization
      </Button>

      <DataTable
        columns={columns}
        data={organizations}
        loading={loading}
      />

    </div>
  );
}

export default Organizations;