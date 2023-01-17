import React, { useContext, useState } from "react";
import { AuthContext } from "../context/authContext";
import Button from "react-bootstrap/Button";
import "./Home.css";
import { Link } from "react-router-dom";
import { PetContext } from "../context/petContext";

export default function Home() {
  const { isLoggedIn, user } = useContext(AuthContext);
  const { pets, setPets } = useContext(PetContext);

  function handleFilterClick(type) {
    setPets(pets.filter((pet) => pet.type === type));
  }

  return (
    <div className="homeContainer">
      <div className="homeStructure">
        <div className="titles">
          {isLoggedIn ? (
            <h1> Welcome {user.firstName + " " + user.lastName}</h1>
          ) : null}

          <h1>Welcome to eXtreme Adopted!</h1>
        </div>
        <div className="pText">
          <h5>
            Here you can find the most crazy and extreme pet adoption place
            around the world.
            <br />
            Don't believe me? Check out our App and find out by yourself!
          </h5>
        </div>
      </div>

      <div className="home-buttons">
        <Link to="/search/dog">
          <Button
            variant="outline-secondary"
            className="square-button-dog"
            onClick={() => handleFilterClick("dog")}
          >
            Dogs
          </Button>{" "}
        </Link>
        <Link to="/search/cat">
          <Button
            variant="outline-secondary"
            className="square-button-cat"
            onClick={() => handleFilterClick("cat")}
          >
            Cats
          </Button>{" "}
        </Link>
        <Link to="/search">
          <Button variant="primary" className="square-button">
            Search pets
          </Button>{" "}
        </Link>
        <Link to="/my-pets">
          <Button variant="primary" className="square-button">
            My Pets
          </Button>{" "}
        </Link>
      </div>
    </div>
  );
}
