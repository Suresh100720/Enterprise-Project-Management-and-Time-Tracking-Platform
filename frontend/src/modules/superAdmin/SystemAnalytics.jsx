import React from "react";
import { Card, Row, Col } from "antd";

function SystemAnalytics() {

  return (
    <div>

      <h2>System Analytics</h2>

      <Row gutter={16}>

        <Col span={12}>
          <Card title="Active Organizations">
            Analytics data here
          </Card>
        </Col>

        <Col span={12}>
          <Card title="Active Users">
            Analytics data here
          </Card>
        </Col>

      </Row>

    </div>
  );
}

export default SystemAnalytics;