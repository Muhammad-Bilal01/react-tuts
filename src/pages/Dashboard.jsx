import React from "react";
import AppLayout from "../components/AppLayout";
import AppCard from "../components/AppCard";
import { Col, Row } from "antd";

function Dashboard() {
  return (
    <div>
      <AppLayout>
        <Row>
          <Col span={8}>
            <AppCard />
          </Col>

          <Col span={8}>
            <AppCard />
          </Col>

          <Col span={8}>
            <AppCard />
          </Col>
        </Row>
      </AppLayout>
    </div>
  );
}

export default Dashboard;
