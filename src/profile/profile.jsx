import React from "react";
import "./Profile.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export default function Profile() {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicFirstName">
        <Form.Label>First Name</Form.Label>
        <Form.Control type="name" placeholder="Your first name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formLastName">
        <Form.Label>Last Name</Form.Label>
        <Form.Control type="name" placeholder="Your last name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="phoneNumber">
        <Form.Label>Phone Number</Form.Label>
        <Form.Control type="phone number" placeholder="Your phone number " />
      </Form.Group>
      <Form.Group className="mb-3" controlId="bio">
        <Form.Label>Bio</Form.Label>
        <input type="text" />
        <Form.Check type="textbox" placeholder="Write your bio" />
      </Form.Group>
      <Button variant="primary" type="save">
        Save
      </Button>
    </Form>
  );
}
