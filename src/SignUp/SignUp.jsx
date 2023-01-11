import React from "react";
import { useContext } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import { AuthContext } from "../context/authContext";
import "./SignUp.css";

export default function SignUp({ setShowSignup }) {
  const auth = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const email = formData.get("email");
    const password = formData.get("password");
    const passwordRepeat = formData.get("passwordRepeat");
    const firstName = formData.get("firstName");
    const lastName = formData.get("lastName");
    const phoneNumber = formData.get("phoneNumber");
    try {
      await auth.signup({
        email,
        password,
        passwordRepeat,
        firstName,
        lastName,
        phoneNumber,
      });
      setShowSignup(false);
    } catch (error) {
      console.log(error);
      alert(error.message);
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group as={Col} controlId="formGridEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
          name="email"
          placeholder="Enter email"
          required
        />
      </Form.Group>

      <Form.Group as={Col} controlId="formGridPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          name="password"
          placeholder="Password"
          required
        />
      </Form.Group>

      <Form.Group as={Col} controlId="formGridPassword2">
        <Form.Label>Confirm Password</Form.Label>

        <Form.Control
          type="password"
          name="passwordRepeat"
          placeholder="Confirm your Password"
        />
      </Form.Group>

      <Form.Group as={Col} controlId="formGridFirstName">
        <Form.Label>First name</Form.Label>
        <Form.Control
          type="name"
          name="firstName"
          placeholder="First name"
          required
        />
      </Form.Group>

      <Form.Group as={Col} controlId="formGridLastName">
        <Form.Label>Last name</Form.Label>
        <Form.Control
          type="name"
          placeholder="Last name"
          name="lastName"
          required
        />
      </Form.Group>

      <Form.Group as={Col} controlId="formGridPhone">
        <Form.Label>Phone number</Form.Label>
        <Form.Control
          type="number"
          placeholder="Phone number"
          name="phoneNumber"
          required
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}
