import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { AuthContext } from "./authContext";

// default state - not logged in
export const PetContext = React.createContext({
  pets: [],
  adoptPet: () => {},
});

export function PetContextProvider({ children }) {
  const { setUser } = useContext(AuthContext);
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

  const value = { pets, adoptPet, savePetToUser };
  return <PetContext.Provider value={value}>{children}</PetContext.Provider>;
}
