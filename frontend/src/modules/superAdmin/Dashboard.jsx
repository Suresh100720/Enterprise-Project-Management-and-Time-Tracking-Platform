import React from "react";
import { Card, Row, Col, Progress } from "antd";

function Dashboard() {
  return (
    <div>

      <h1 className="text-2xl font-bold mb-6">
        System Analytics 🚀
      </h1>

      <Row gutter={16}>
        <Col span={6}><Card title="Organizations">10</Card></Col>
        <Col span={6}><Card title="Projects">32</Card></Col>
        <Col span={6}><Card title="Users">120</Card></Col>
        <Col span={6}><Card title="Revenue">$25K</Card></Col>
      </Row>

      <Row gutter={16} className="mt-6">
        <Col span={12}>
          <Card title="Project Completion">
            <Progress percent={75} />
          </Card>
        </Col>

        <Col span={12}>
          <Card title="Resource Utilization">
            <Progress percent={60} status="active" />
          </Card>
        </Col>
      </Row>

    </div>
  );
}

export default Dashboard;