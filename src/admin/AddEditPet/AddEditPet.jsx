import React, { useEffect, useState } from "react";
import { useContext } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import { useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../../context/authContext";
import { PetContext } from "../../context/petContext";
import "./AddEditPet.css";

export function AddEditPet() {
  const { user, isLoggedIn } = useContext(AuthContext);
  const { addPet, pets, editPet } = useContext(PetContext);
  const [image, setImage] = useState();
  const navigate = useNavigate();
  const { petId } = useParams(); // only exist in edit mode
  const editedPet = pets.find((p) => p._id === petId);

  useEffect(() => {
    if (!isLoggedIn || !user.isAdmin) {
      navigate("/login");
    }
  }, [isLoggedIn, user]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formElement = e.target;
    // FormData constructor returns formData instance with the form data
    const petFormData = new FormData(formElement);

    const hasImage = image && image[0];
    if (hasImage) {
      petFormData.append("image", image[0]);
    }

    try {
      if (petId) {
        petFormData.append("_id", petId);
        if (!hasImage) {
          petFormData.append("imageUrl", editedPet.imageUrl);
        }
        await editPet(petFormData);
      } else {
        await addPet(petFormData);
      }
      navigate("/search");
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
            defaultValue={editedPet?.type || ""}
          />
        </Form.Group>
        <Form.Group as={Col} controlId="Name">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="name"
            placeholder="Enter animal name"
            name="name"
            defaultValue={editedPet?.name || ""}
          />
        </Form.Group>
        <Form.Group as={Col} controlId="Name">
          <Form.Label>Owner id (if exists)</Form.Label>
          <Form.Control
            type="owner"
            placeholder="Enter owner id"
            name="owner"
            defaultValue={editedPet?.owner || ""}
          />
        </Form.Group>
        <Form.Group as={Col} controlId="Image">
          <Form.Label>Upload Image</Form.Label>
          <Form.Control
            type="file"
            name="image"
            onChange={(e) => setImage(e.target.value)}
          />
        </Form.Group>
        <Form.Group as={Col} controlId="animalHeight">
          <Form.Label>Height (CM)</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter Animal Height"
            name="height"
            defaultValue={editedPet?.height || ""}
          />
        </Form.Group>
        <Form.Group as={Col} controlId="Weight">
          <Form.Label>Weight (KG)</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter Animal Weight"
            name="weight"
            defaultValue={editedPet?.weight || ""}
          />
        </Form.Group>
        <Form.Group as={Col} controlId="Color">
          <Form.Label>Color</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Animal Color"
            name="color"
            defaultValue={editedPet?.color || ""}
          />
        </Form.Group>
        <Form.Group as={Col} controlId="bio">
          <Form.Label>Bio</Form.Label>
          <Form.Control
            type="text"
            placeholder="Write animal bio"
            name="bio"
            defaultValue={editedPet?.bio || ""}
          />
        </Form.Group>
        <Form.Group as={Col} controlId="Hypoallergenic">
          <Form.Label>Hypoallergenic</Form.Label>

          <Form.Select
            form="add-pet"
            name="hypoallergenic"
            defaultValue={editedPet?.hypoallergenic ? "Yes" : "No"}
          >
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
            defaultValue={editedPet?.dietaryRestrictions || ""}
          />
        </Form.Group>
        <Form.Group as={Col} controlId="Breed">
          <Form.Label>Breed of animal</Form.Label>
          <Form.Control
            type="text"
            placeholder="Write the animal breed"
            name="breed"
            defaultValue={editedPet?.breed || ""}
          />
        </Form.Group>
        <Button variant="primary" type="save">
          Save
        </Button>
      </Form>
    </div>
  );
}
