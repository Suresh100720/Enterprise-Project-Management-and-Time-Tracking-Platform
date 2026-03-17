import React from "react";
import { Card, Row, Col } from "antd";

import ResourceUtilizationChart from "../../components/charts/ResourceUtilizationChart";

function Utilization() {

  const utilizationData = [
    { name: "Alice", hours: 35 },
    { name: "John", hours: 28 },
    { name: "Mike", hours: 40 }
  ];

  return (
    <div>

      <h2>Resource Utilization</h2>

      <Row gutter={16}>

        <Col span={24}>
          <Card title="Team Workload">
            <ResourceUtilizationChart data={utilizationData} />
          </Card>
        </Col>

      </Row>

    </div>
  );
}

export default Utilization;