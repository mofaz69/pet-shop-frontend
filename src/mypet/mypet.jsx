import React from "react";
import "./MyPet.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Pet from "../Pet/Pet";

export default function MyPet() {
  return (
    <div>
      <h1>You currently do not own any Pets</h1>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>Pet Name</Card.Title>
          <Card.Body>Pet Status foster or adopted</Card.Body>
          <Button variant="primary">Click To see more!</Button>
        </Card.Body>
      </Card>
    </div>
  );
}
