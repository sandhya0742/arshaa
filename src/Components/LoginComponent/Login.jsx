import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import login from "./login.jpg";
import { Link } from "react-router-dom";
import "./login.css";

const Login = () => {
  return (
    <div className="login-main">
      <Container>
        <h1 className="shadow-sm text-success mt-5 p-3 text-center rounded">
          Admin Login
        </h1>

        <Row className="mt-5">
          <Col
            lg={4}
            md={3}
            sm={12}
            className="p-5 m-auto shadow-sm rounded-lg"
          >
            <Form>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              <br />
              <Link to="/home">
                <Button variant="success btn-block" type="submit">
                  Login
                </Button>
              </Link>
            </Form>
          </Col>
          <Col lg={7} md={3} sm={8} className="p-3 m-auto shadow-sm rounded-lg">
            <img src={login} style={{ width: "500px", height: "270px" }}></img>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Login;
