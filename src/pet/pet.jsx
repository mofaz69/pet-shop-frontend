import React from "react";
import "./Pet.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useParams } from "react-router-dom";

export default function Pet() {
  const { petId } = useParams();

  // useEffect - getPetById
  console.log(petId);
  return (
    <div>
      <h1>Welcome to David Page</h1>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>Pet Name</Card.Title>
          <Card.Body>Type dog/cat</Card.Body>
          <Card.Body>Pet Status foster or adopted</Card.Body>
          <Card.Body>Height</Card.Body>
          <Card.Body>Weight</Card.Body>
          <Card.Body>Color</Card.Body>
          <Card.Text>Bio</Card.Text>
          <Card.Body>Hypoallergenic (yes/no)</Card.Body>
          <Card.Body>dietary restrictions</Card.Body>
          <Card.Body>breed of animal (Poodle, Siamese) </Card.Body>
          <Button variant="primary">Adopt this cutie!</Button>
          <Button variant="primary">Save David for later</Button>
          <Button variant="primary">Return Home</Button>
        </Card.Body>
      </Card>
    </div>
  );
}
