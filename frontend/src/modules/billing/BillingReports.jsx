import React from "react";
import { Card, Progress } from "antd";

function BillingReports() {
  return (
    <Card title="Reports & Analytics 📊">

      <div style={{ marginBottom: "20px" }}>
        Project Completion
        <Progress percent={75} />
      </div>

      <div style={{ marginBottom: "20px" }}>
        Resource Usage
        <Progress percent={60} />
      </div>

      <div>
        Revenue Growth
        <Progress percent={80} status="active" />
      </div>

    </Card>
  );
}

export default BillingReports;