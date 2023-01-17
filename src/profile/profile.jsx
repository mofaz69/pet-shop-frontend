import React from "react";
import "./Profile.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useContext } from "react";
import { AuthContext } from "../context/authContext";

export default function Profile() {
  const { user, updateUser } = useContext(AuthContext);

  const handleProfileUpdate = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const email = formData.get("email");
    const password = formData.get("password");
    const passwordRepeat = formData.get("passwordRepeat");
    const firstName = formData.get("firstName");
    const lastName = formData.get("lastName");
    const phoneNumber = formData.get("phoneNumber");

    try {
      const updatedUser = {
        email,
        password,
        passwordRepeat,
        firstName,
        lastName,
        phoneNumber,
      };
      await updateUser(updatedUser);
      alert("Updated successfully");
    } catch (error) {
      console.log(error);
      alert(error.message);
    }
  };

  if (!user) {
    return <div className="pleaseLogin">Please login to view this page</div>;
  }

  return (
    <div className="container">
      <Form
        className="mt-5"
        style={{ minWidth: "500px" }}
        onSubmit={handleProfileUpdate}
      >
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            placeholder="Enter email"
            defaultValue={user.email}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            name="password"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Repeat Password</Form.Label>
          <Form.Control
            type="password"
            name="passwordRepeat"
            placeholder="Repeat Password"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicFirstName">
          <Form.Label>First Name</Form.Label>

          <Form.Control
            type="text"
            name="firstName"
            placeholder="Your first name"
            defaultValue={user.firstName}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formLastName">
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            type="text"
            name="lastName"
            placeholder="Your last name"
            defaultValue={user.lastName}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="phoneNumber">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control
            type="text"
            name="phoneNumber"
            placeholder="Your phone number "
            defaultValue={user.phoneNumber}
          />
        </Form.Group>

        <Button variant="primary" type="save">
          Save
        </Button>
      </Form>
    </div>
  );
}
