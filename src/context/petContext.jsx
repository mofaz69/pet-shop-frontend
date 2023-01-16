import React, { useEffect, useState } from "react";
import { useContext } from "react";
import PetList from "../components/PetList/PetList";
import { AuthContext } from "./authContext";

// default state - not logged in
export const PetContext = React.createContext({
  pets: [],
  adoptPet: () => {},
});

export function PetContextProvider({ children }) {
  const { setUser, user } = useContext(AuthContext);
  const [pets, setPets] = useState([]);

  const getAllPets = async () => {
    const response = await fetch("http://localhost:3001/pet");
    const data = await response.json();
    if (response.status !== 200) {
      throw new Error(data.message);
    }

    setPets(data);
  };

  const adoptPet = async (petId) => {
    const response = await fetch(`http://localhost:3001/pet/${petId}/adopt`, {
      method: "POST",
      credentials: "include",
    });

    const data = await response.json();
    console.log(data);

    setPets((pets) => {
      const updatedPets = [...pets];
      const petIndex = updatedPets.findIndex((p) => p._id === petId);
      updatedPets[petIndex].owner = user._id;
      return updatedPets;
    });
  };

  const returnPet = async (petId) => {
    const response = await fetch(`http://localhost:3001/pet/${petId}/return`, {
      method: "POST",
      credentials: "include",
    });

    const data = await response.json();
    console.log(data);

    setPets((pets) => {
      const updatedPets = [...pets];
      const petIndex = updatedPets.findIndex((p) => p._id === petId);
      updatedPets[petIndex].owner = "";
      return updatedPets;
    });
  };

  const savePetToUser = async (petId) => {
    const response = await fetch(`http://localhost:3001/pet/${petId}/save`, {
      method: "POST",
      credentials: "include",
    });

    const data = await response.json();
    if (response.status === 200) {
      alert(data.message);
      setUser((user) => ({
        ...user,
        favoritePets: [...user.favoritePets, petId],
      }));
    }
  };
  const removePetFromUser = async (petId) => {
    const response = await fetch(`http://localhost:3001/pet/${petId}/save`, {
      method: "DELETE",
      credentials: "include",
    });

    const data = await response.json();
    if (response.status === 200) {
      alert(data.message);
      setUser((user) => ({
        ...user,
        favoritePets: [...user.favoritePets.filter((id) => id !== petId)],
      }));
    }
  };

  useEffect(() => {
    getAllPets();
  }, []);

  const addPet = async (pet) => {
    const response = await fetch("http://localhost:3001/pet", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify(pet),
    });
    const newPet = await response.json();
    if (response.status !== 200) {
      throw new Error(newPet.message);
    }
    setPets((prevPets) => [...prevPets, newPet]);
  };

  const editPet = async (pet) => {
    const response = await fetch(`http://localhost:3001/pet/${pet._id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify(pet),
    });
    const editedPet = await response.json();
    if (response.status !== 200) {
      throw new Error(editedPet.message);
    }
    setPets((prevPets) => {
      const updatedPets = [...prevPets];
      const index = prevPets.findIndex((p) => p._id === pet._id);
      updatedPets[index] = pet;
      return updatedPets;
    });
  };

  // const deletePet = (petId) => {
  //   const newArray = PetList.filter((pet) => pet._id !== petId);
  //   setPetList(newArray);
  // };

  const value = {
    pets,
    adoptPet,
    savePetToUser,
    returnPet,
    setPets,
    addPet,
    editPet,
    removePetFromUser,
  };
  return <PetContext.Provider value={value}>{children}</PetContext.Provider>;
}
