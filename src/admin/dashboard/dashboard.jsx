import React, { useEffect, useState } from "react";
import { useContext } from "react";
import Button from "react-bootstrap/esm/Button";
import { Link } from "react-router-dom";
import { PetCard } from "../../components/PetList/PetCard/PetCard";
import PetList from "../../components/PetList/PetList";
import { domain } from "../../constants";
import { PetContext } from "../../context/petContext";
import "./Dashboard.css";

export function Dashboard() {
  const { pets } = useContext(PetContext);
  const [users, setUsers] = useState([]);
  const [ownedPets, setOwnedPets] = useState();
  const [selectedUserId, setSelectedUserId] = useState();

  useEffect(() => {
    fetch(`${domain}/user`, {
      credentials: "include",
    })
      .then((res) => res.json())
      .then((data) => {
        setUsers(data.users);
        setOwnedPets(data.ownedPets);
      })
      .catch((err) => {
        alert("Error: " + err.message);
      });
  }, []);

  return (
    <div id="dashboard">
      <h1 className="dashboard-title">Dashboard</h1>

      <br />
      <h2 className="dashboard-title">Users</h2>
      {users.length === 0 ? (
        <h3 className="text-center">Loading...</h3>
      ) : (
        <div className="user-table">
          <div className="user-row">
            <span>First Name</span>
            <span>Last Name</span>
            <span>Phone</span>
            <span>Email</span>
            <span>Pets</span>
          </div>
          {users.map((user) => {
            return (
              <React.Fragment key={user._id}>
                <div className="user-row">
                  <span>{user.firstName}</span>
                  <span>{user.lastName}</span>
                  <span>{user.phoneNumber}</span>
                  <span>{user.email}</span>
                  <span>
                    <Button
                      variant="primary"
                      onClick={() => setSelectedUserId(user._id)}
                    >
                      Show Pets
                    </Button>
                  </span>
                </div>
                {selectedUserId === user._id ? (
                  <PetList pets={ownedPets[selectedUserId]} />
                ) : null}
              </React.Fragment>
            );
          })}
        </div>
      )}
      <br />
      <h2 className="dashboard-title">Pets</h2>
      {pets.map((pet) => {
        return (
          <div className="pet-row" key={pet._id}>
            <PetCard pet={pet} />
            <Button variant="primary">
              <Link className="white-text" to={`/edit/${pet._id}`}>
                Edit {pet.name}
              </Link>
            </Button>
          </div>
        );
      })}
    </div>
  );
}
