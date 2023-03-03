import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <footer className="bg-light mt-auto py-3">
      <Container>
        <Row>
          <Col className="text-center text-muted">
            <p>&copy; 2023 Laptop Store. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
