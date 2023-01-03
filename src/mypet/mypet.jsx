import React, { useState } from "react";
import "./MyPet.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Pet from "../Pet/Pet";
import { Link } from "react-router-dom";
// import React, { useState } from "react";

export default function MyPet() {
  const [pets, setPets] = useState([{ id: "123" }]);

  return (
    <div>
      {pets.map((pet, index) => {
        return (
          <div key={pet.id}>
            <h1>You currently do not own any Pets</h1>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body>
                <Card.Title>Pet Name</Card.Title>
                <Card.Body>Pet Status foster or adopted</Card.Body>
                <Link to={"/mypet/" + pet.id}>
                  <Button>Click To see more!</Button>
                </Link>
              </Card.Body>
            </Card>
          </div>
        );
      })}
    </div>
  );
}
