import React, { useEffect, useState } from "react";

import DataTable from "../../components/tables/DataTable";
import apiClient from "../../config/apiConfig";

function ClientProjects() {

  const [clientProjects, setClientProjects] = useState([]);

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {

    try {

      const apiResponse = await apiClient.get("/client/projects");

      setClientProjects(apiResponse.data);

    } catch (errorObject) {
      console.error(errorObject);
    }
  };

  const columns = [
    { title: "Project Name", dataIndex: "name" },
    { title: "Status", dataIndex: "status" },
    { title: "Budget", dataIndex: "budget" }
  ];

  return (
    <div>

      <h2>My Projects</h2>

      <DataTable
        columns={columns}
        data={clientProjects}
      />

    </div>
  );
}

export default ClientProjects;