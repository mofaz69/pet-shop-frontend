import React, { useContext, useState } from "react";
import "./PetList.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/authContext";
// import React, { useState } from "react";

export default function PetList({ pets }) {
  const { user, isLoggedIn } = useContext(AuthContext);
  return (
    <div>
      {isLoggedIn ? (
        <h1>You currently own {user.favoritePets?.length || 0} pets</h1>
      ) : null}
      <div className="petsCard">
        {pets.map((pet, index) => {
          return (
            <div key={pet._id}>
              <Card style={{ width: "18rem" }}>
                <div className="petPic">
                  <Card.Img
                    variant="top"
                    src={pet.picture}
                    className="petImage"
                  />
                </div>
                <Card.Body>
                  <Card.Title>{pet.name}</Card.Title>
                  <Card.Body>
                    {pet.owner ? "Adopted" : "Available for adoption"}
                  </Card.Body>
                  <Link to={"/mypet/" + pet._id}>
                    <Button>Click To see more!</Button>
                  </Link>
                </Card.Body>
              </Card>
            </div>
          );
        })}
      </div>
    </div>
  );
}
