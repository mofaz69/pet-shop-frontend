import React, { useEffect, useState } from "react";
import { useContext } from "react";
import Button from "react-bootstrap/esm/Button";
import { Link } from "react-router-dom";
import { PetCard } from "../../components/PetList/PetCard/PetCard";
import PetList from "../../components/PetList/PetList";
import { PetContext } from "../../context/petContext";
import "./Dashboard.css";

export function Dashboard() {
  const { pets } = useContext(PetContext);
  const [users, setUsers] = useState([]);
  const [ownedPets, setOwnedPets] = useState();
  const [selectedUser, setSelectedUser] = useState();

  useEffect(() => {
    fetch("http://localhost:3001/user", {
      credentials: "include",
    }).then((res) =>
      res.json().then((data) => {
        setUsers(data.users);
        setOwnedPets(data.ownedPets);
      })
    );
  }, []);

  return (
    <div id="dashboard">
      <h1>Dashboard</h1>

      <br />
      <h2>Users</h2>
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
                    onClick={() => setSelectedUser(user._id)}
                  >
                    Show Pets
                  </Button>
                </span>
              </div>
              {selectedUser === user._id ? (
                <PetList pets={ownedPets[selectedUser]} />
              ) : null}
            </React.Fragment>
          );
        })}
      </div>
      <br />
      <h2>Pets</h2>
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
