import React from "react";
import { useContext } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import { PetContext } from "../../context/petContext";
import "./AddPet.css";

export default function AddPet({ setShowAddPet }) {
  const pet = useContext(PetContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const type = formData.get("type");
    const name = formData.get("name");
    const adoptionStatus = formData.get("adoptionStatus");
    const image = formData.get("image");
    const height = formData.get("height");
    const weight = formData.get("weight");
    const color = formData.get("color");
    const bio = formData.get("bio");
    const hypoallergenic = formData.get("hypoallergenic");
    const dietaryRestrictions = formData.get("dietaryRestrictions");
    const breed = formData.get("breed");
    try {
      await pet.addPet({
        type,
        name,
        adoptionStatus,
        image,
        height,
        weight,
        color,
        bio,
        hypoallergenic,
        dietaryRestrictions,
        breed,
      });
      setShowAddPet(false);
    } catch (error) {
      console.log(error);
      alert(error.message);
    }
  };

  return (
    <div className="container">
      <Form onSubmit={handleSubmit}>
        <Form.Group as={Col} controlId="Type">
          <Form.Label>Type</Form.Label>
          <Form.Control type="animal" placeholder="Enter animal type" />
        </Form.Group>
        <Form.Group as={Col} controlId="Name">
          <Form.Label>Name</Form.Label>
          <Form.Control type="name" placeholder="Enter animal name" />
        </Form.Group>
        <Form.Group as={Col} controlId="AdoptionStatus">
          <Form.Label>Adoption Status</Form.Label>
          <Form.Control type="status" placeholder="Adoption Status" />
        </Form.Group>
        <Form.Group as={Col} controlId="Image">
          <Form.Label>Add Image</Form.Label>
          <Form.Control type="Image" placeholder="Animal Photo" />
        </Form.Group>
        <Form.Group as={Col} controlId="animalHeight">
          <Form.Label>Height</Form.Label>
          <Form.Control type="number" placeholder="Enter Animal Height" />
        </Form.Group>
        <Form.Group as={Col} controlId="Weight">
          <Form.Label>Weight</Form.Label>
          <Form.Control type="number" placeholder="Enter Animal Weight" />
        </Form.Group>
        <Form.Group as={Col} controlId="Color">
          <Form.Label>Color</Form.Label>
          <Form.Control type="text" placeholder="Enter Animal Color" />
        </Form.Group>
        <Form.Group as={Col} controlId="bio">
          <Form.Label>Bio</Form.Label>
          <Form.Control type="textbox" placeholder="Write animal bio" />
        </Form.Group>
        <Form.Group as={Col} controlId="Hypoallergenic">
          <Form.Label>Hypoallergenic</Form.Label>
          <Form.Select>
            <option>Yes</option>
            <option>No</option>
          </Form.Select>
        </Form.Group>
        <Form.Group as={Col} controlId="DietaryRestrictions">
          <Form.Label>Dietary Restrictions</Form.Label>
          <Form.Control
            type="textbox"
            placeholder="Any dietary restrictions?"
          />
        </Form.Group>
        <Form.Group as={Col} controlId="Breed">
          <Form.Label>Breed of animal</Form.Label>
          <Form.Control type="Breed" placeholder="Write the animal breed" />
        </Form.Group>
        <Button variant="primary" type="save">
          Save
        </Button>
      </Form>
    </div>
  );
}
