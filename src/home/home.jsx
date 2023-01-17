import React, { useContext, useState } from "react";
import { AuthContext } from "../context/authContext";
import Button from "react-bootstrap/Button";
import "./Home.css";
import { Link } from "react-router-dom";
import { PetContext } from "../context/petContext";

export default function Home() {
  const { isLoggedIn, user } = useContext(AuthContext);
  const { pets } = useContext(PetContext);

  return (
    <div className="homeContainer">
      <div className="homeStructure">
        <div>
          <div className="titles">
            {isLoggedIn ? (
              <h1> Welcome {user.firstName + " " + user.lastName}</h1>
            ) : (
              <h1>Welcome to eXtreme Adopted!</h1>
            )}
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
      </div>

      <div className="home-buttons">
        <Link to="/search/dog">
          <Button
            variant="outline-primary"
            className="square-button-pet square-button-dog"
          >
            Dogs
          </Button>{" "}
        </Link>
        <Link to="/search/cat">
          <Button
            variant="outline-primary"
            className="square-button-pet square-button-cat"
          >
            Cats
          </Button>
        </Link>
        <Link to="/search">
          <Button variant="primary" className="square-button">
            Search pets
          </Button>
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
