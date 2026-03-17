import React from "react";
import { Card, Row, Col, Progress } from "antd";

function DashboardHome() {
  return (
    <div>

      <h1 className="text-2xl font-bold mb-6">
        Dashboard Overview 🚀
      </h1>

      {/* STATS */}
      <Row gutter={16}>
        <Col span={6}><Card title="Projects">12</Card></Col>
        <Col span={6}><Card title="Teams">5</Card></Col>
        <Col span={6}><Card title="Users">24</Card></Col>
        <Col span={6}><Card title="Clients">8</Card></Col>
      </Row>

      {/* PROGRESS */}
      <Row gutter={16} className="mt-6">
        <Col span={12}>
          <Card title="Project Progress">
            <Progress percent={70} />
          </Card>
        </Col>

        <Col span={12}>
          <Card title="Budget Usage">
            <Progress percent={55} status="active" />
          </Card>
        </Col>
      </Row>

    </div>
  );
}

export default DashboardHome;