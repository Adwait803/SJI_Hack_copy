import React from "react";
import { Link } from "react-router-dom";
import { Card, Col, Row, Container } from "react-bootstrap";

function Main() {
  return (
    <Container>
      <Row>
        <Col>
          <img
            src="https://b1984230.smushcdn.com/1984230/wp-content/uploads/2021/07/Access-Denied.png?lossy=1&strip=1&webp=1"
            class="img-fluid"
            alt="Phone image"
          />
        </Col>

        <Col>
          <Card>
            <Link to={`/ManagerLogin`} className="btn btn-dark my-3">
              Manager Login
            </Link>
            <Link to={`/UserLogin`} className="btn btn-dark my-3">
              User Login
            </Link>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Main;
