import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const Dashboard = () => {
  return (
    <Container className="py-4">
      <h3 className="mb-4">Dashboard</h3>
      <Row>
        <Col md={4} sm={6} className="mb-4">
          <Card>
            <Card.Body>
              <Card.Title>Total Candidates</Card.Title>
              <Card.Text>1,234</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} sm={6} className="mb-4">
          <Card>
            <Card.Body>
              <Card.Title>Candidates Selected</Card.Title>
              <Card.Text>87</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} sm={6} className="mb-4">
          <Card>
            <Card.Body>
              <Card.Title>Resume Matched</Card.Title>
              <Card.Text>20</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;