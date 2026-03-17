import React, { useEffect, useState } from "react";
import { Card, Row, Col } from "antd";

import apiClient from "../../config/apiConfig";

function ClientDashboard() {

  const [dashboardStats, setDashboardStats] = useState({
    projects: 0,
    invoices: 0,
    pendingPayments: 0
  });

  useEffect(() => {
    fetchDashboardStats();
  }, []);

  const fetchDashboardStats = async () => {
    try {

      const apiResponse = await apiClient.get("/client/dashboard");

      setDashboardStats(apiResponse.data);

    } catch (errorObject) {
      console.error(errorObject);
    }
  };

  return (
    <div>

      <h2 className="text-xl">Client Dashboard</h2>

      <Row gutter={16}>

        <Col span={8}>
          <Card title="Projects">
            {dashboardStats.projects}
          </Card>
        </Col>

        <Col span={8}>
          <Card title="Invoices">
            {dashboardStats.invoices}
          </Card>
        </Col>

        <Col span={8}>
          <Card title="Pending Payments">
            ${dashboardStats.pendingPayments}
          </Card>
        </Col>

      </Row>

    </div>
  );
}

export default ClientDashboard;