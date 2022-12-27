import React from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import "./SignUp.css";

export default function SignUp() {
  return (
    <Form>
      <Form.Group as={Col} controlId="formGridEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>

      <Form.Group as={Col} controlId="formGridPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>

      <Form.Group as={Col} controlId="formGridPassword2">
        <Form.Label>Confirm Password</Form.Label>
        <Form.Control type="password" placeholder="Confirm your Password" />
      </Form.Group>

      <Form.Group as={Col} controlId="formGridFirstName">
        <Form.Label>First name</Form.Label>
        <Form.Control type="name" placeholder="First name" />
      </Form.Group>

      <Form.Group as={Col} controlId="formGridLastName">
        <Form.Label>Last name</Form.Label>
        <Form.Control type="name" placeholder="Last name" />
      </Form.Group>

      <Form.Group as={Col} controlId="formGridPhone">
        <Form.Label>Phone number</Form.Label>
        <Form.Control type="number" placeholder="Phone number" />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}
