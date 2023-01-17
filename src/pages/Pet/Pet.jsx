import React, { useContext } from "react";
import "./Pet.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link, useParams } from "react-router-dom";
import { PetContext } from "../../context/petContext";
import { AuthContext } from "../../context/authContext";

export default function Pet() {
  const { petId } = useParams();
  const { pets, adoptPet, returnPet, savePetToUser, removePetFromUser } =
    useContext(PetContext);
  const { user } = useContext(AuthContext);
  const pet = pets.find((pet) => petId === pet._id);
  if (!pet) {
    return null;
  }

  const handleAddToSavedPets = () => {
    savePetToUser(petId);
  };

  const handleRemoveFromSavedPets = () => {
    removePetFromUser(petId);
  };

  const isMyPet = user?._id === pet.owner;
  const isMySavedPet = user?.favoritePets.includes(petId);

  return (
    <div className="container">
      <Card style={{ width: "32rem" }}>
        <Card.Img variant="top" src={pet.picture || pet.imageUrl} />
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
                Adopt {pet.name}!
              </Button>
            ) : null}

            {isMyPet ? (
              <Button variant="primary" onClick={() => returnPet(petId)}>
                Return {pet.name}
              </Button>
            ) : null}

            {isMySavedPet ? (
              <Button variant="primary" onClick={handleRemoveFromSavedPets}>
                Remove {pet.name} from saved pets
              </Button>
            ) : (
              <Button variant="primary" onClick={handleAddToSavedPets}>
                Save {pet.name} for later
              </Button>
            )}
            <Link to={"/"}>
              <Button>Return Home</Button>
            </Link>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}
