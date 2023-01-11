import React, { useEffect, useState } from "react";
import { useContext } from "react";
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
    const response = await fetch("http://localhost:3001/pet/adopt", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify({ petId }),
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

  const unadoptPet = async (petId) => {
    const response = await fetch("http://localhost:3001/pet/unadopt", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify({ petId }),
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
    const response = await fetch("http://localhost:3001/pet/save", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify({ petId }),
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

  useEffect(() => {
    getAllPets();
  }, []);

  const value = { pets, adoptPet, savePetToUser, unadoptPet };
  return <PetContext.Provider value={value}>{children}</PetContext.Provider>;
}