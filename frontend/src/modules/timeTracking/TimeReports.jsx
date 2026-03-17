import React, { useEffect, useState } from "react";

import DataTable from "../../components/tables/DataTable";
import apiClient from "../../config/apiConfig";

function TimeReports() {

  const [reportsData, setReportsData] = useState([]);

  useEffect(() => {
    fetchReports();
  }, []);

  const fetchReports = async () => {

    const response = await apiClient.get("/time-reports");

    setReportsData(response.data);
  };

  const columns = [
    { title: "Project", dataIndex: "project" },
    { title: "User", dataIndex: "user" },
    { title: "Total Hours", dataIndex: "hours" }
  ];

  return (
    <div>

      <h2>Time Reports</h2>

      <DataTable columns={columns} data={reportsData} />

    </div>
  );
}

export default TimeReports;