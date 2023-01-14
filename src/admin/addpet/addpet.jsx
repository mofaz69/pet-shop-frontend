import React, { useEffect } from "react";
import { useContext } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/authContext";
import { PetContext } from "../../context/petContext";
import "./AddPet.css";

export default function AddPet({}) {
  const { user, isLoggedIn } = useContext(AuthContext);
  const pet = useContext(PetContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoggedIn || !user.isAdmin) {
      navigate("/login");
    }
  }, [isLoggedIn, user]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const type = formData.get("type");
    const name = formData.get("name");
    const adoptionStatus = formData.get("adoptionStatus");
    const imageUrl = formData.get("image");
    const height = formData.get("height");
    const weight = formData.get("weight");
    const color = formData.get("color");
    const bio = formData.get("bio");
    const hypoallergenic = formData.get("hypoallergenic");
    const dietaryRestrictions = formData.get("dietaryRestrictions");
    const breed = formData.get("breed");
    const newPet = {
      type,
      name,
      adoptionStatus,
      imageUrl,
      height,
      weight,
      color,
      bio,
      hypoallergenic,
      dietaryRestrictions,
      breed,
    };

    try {
      await pet.addPet(newPet);
    } catch (error) {
      console.log(error);
      alert(error.message);
    }
  };

  return (
    <div className="container">
      <Form id="add-pet" onSubmit={handleSubmit}>
        <Form.Group as={Col} controlId="Type">
          <Form.Label>Type</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter animal type"
            name="type"
          />
        </Form.Group>
        <Form.Group as={Col} controlId="Name">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="name"
            placeholder="Enter animal name"
            name="name"
          />
        </Form.Group>
        <Form.Group as={Col} controlId="AdoptionStatus">
          <Form.Label>Adoption Status</Form.Label>
          <Form.Control
            type="text"
            placeholder="Adoption Status"
            name="adoptionStatus"
          />
        </Form.Group>
        <Form.Group as={Col} controlId="Image">
          <Form.Label>Add Image</Form.Label>
          <Form.Control type="text" placeholder="Animal Photo" name="image" />
        </Form.Group>
        <Form.Group as={Col} controlId="animalHeight">
          <Form.Label>Height (CM)</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter Animal Height"
            name="height"
          />
        </Form.Group>
        <Form.Group as={Col} controlId="Weight">
          <Form.Label>Weight</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter Animal Weight"
            name="weight"
          />
        </Form.Group>
        <Form.Group as={Col} controlId="Color">
          <Form.Label>Color</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Animal Color"
            name="color"
          />
        </Form.Group>
        <Form.Group as={Col} controlId="bio">
          <Form.Label>Bio</Form.Label>
          <Form.Control type="text" placeholder="Write animal bio" name="bio" />
        </Form.Group>
        <Form.Group as={Col} controlId="Hypoallergenic">
          <Form.Label>Hypoallergenic</Form.Label>
          <Form.Select form="add-pet" name="hypoallergenic">
            <option>Yes</option>
            <option>No</option>
          </Form.Select>
        </Form.Group>
        <Form.Group as={Col} controlId="DietaryRestrictions">
          <Form.Label>Dietary Restrictions</Form.Label>
          <Form.Control
            type="text"
            placeholder="Any dietary restrictions?"
            name="dietaryRestrictions"
          />
        </Form.Group>
        <Form.Group as={Col} controlId="Breed">
          <Form.Label>Breed of animal</Form.Label>
          <Form.Control
            type="text"
            placeholder="Write the animal breed"
            name="breed"
          />
        </Form.Group>
        <Button variant="primary" type="save">
          Save
        </Button>
      </Form>
    </div>
  );
}
