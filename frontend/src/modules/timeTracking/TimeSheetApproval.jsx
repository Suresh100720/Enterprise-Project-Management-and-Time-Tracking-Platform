import React, { useEffect, useState } from "react";
import { Button } from "antd";

import DataTable from "../../components/tables/DataTable";
import apiClient from "../../config/apiConfig";

function TimesheetApproval() {

  const [timesheetsData, setTimesheetsData] = useState([]);

  useEffect(() => {
    fetchTimesheets();
  }, []);

  const fetchTimesheets = async () => {

    const response = await apiClient.get("/timesheets");

    setTimesheetsData(response.data);
  };

  const approveTimesheet = async (timesheetId) => {

    await apiClient.put(`/timesheets/${timesheetId}/approve`);

    fetchTimesheets();
  };

  const columns = [
    { title: "User", dataIndex: "user" },
    { title: "Task", dataIndex: "task" },
    { title: "Hours", dataIndex: "hours" },
    {
      title: "Action",
      render: (_, record) => (
        <Button
          type="primary"
          onClick={() => approveTimesheet(record._id)}
        >
          Approve
        </Button>
      )
    }
  ];

  return (
    <div>

      <h2>Timesheet Approval</h2>

      <DataTable columns={columns} data={timesheetsData} />

    </div>
  );
}

export default TimesheetApproval;