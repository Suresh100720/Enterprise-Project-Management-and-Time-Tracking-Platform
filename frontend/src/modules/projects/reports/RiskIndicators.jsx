import React from "react";
import { Alert } from "antd";

function RiskIndicators() {

  return (
    <div>

      <h2>Risk Indicators</h2>

      <Alert
        message="Budget Overrun Risk"
        description="Actual spending exceeds budget."
        type="warning"
        showIcon
      />

    </div>
  );
}

export default RiskIndicators;