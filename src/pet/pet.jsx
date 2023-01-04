import React, { useContext } from "react";
import "./Pet.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link, useParams } from "react-router-dom";
import { PetContext } from "../context/petContext";

export default function Pet() {
  const { petId } = useParams();
  const { pets, adoptPet } = useContext(PetContext);
  const pet = pets.find((pet) => petId === pet._id);
  if (!pet) {
    return null;
  }
  console.log(pet);
  return (
    <div className="container">
      <Card style={{ width: "32rem" }}>
        <Card.Img variant="top" src={pet.picture} />
        <Card.Body>
          <Card.Title>Name: {pet.name}</Card.Title>
          <Card.Body>Type: {pet.type}</Card.Body>
          <Card.Body>
            Status:
            {pet.owner ? "Adopted" : "Available for adoption"}
          </Card.Body>
          <Card.Body>Height: {pet.height}</Card.Body>
          <Card.Body>Weight: {pet.weight}</Card.Body>
          <Card.Body>Color: {pet.color}</Card.Body>
          <Card.Body>Bio: {pet.bio}</Card.Body>
          <Card.Body>
            Hypoallergenic: {pet.hypoallergenic ? "Yes" : "No"}
          </Card.Body>
          <Card.Body>Dietary Restrictions: {pet.dietaryRestrictions}</Card.Body>
          <Card.Body>Breed: {pet.breed} </Card.Body>
          <div className="buttons">
            {!pet.owner ? (
              <Button variant="primary" onClick={() => adoptPet(petId)}>
                Adopt this cutie!
              </Button>
            ) : null}
            <Button variant="primary">Save {pet.name} for later</Button>
            <Link to={"/"}>
              <Button>Return Home</Button>
            </Link>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}
