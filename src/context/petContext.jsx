import React, { useEffect, useState } from "react";

// default state - not logged in
export const PetContext = React.createContext({
  pets: [],
  adoptPet: () => {},
});

export function PetContextProvider({ children }) {
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

  useEffect(() => {
    getAllPets();
  }, []);

  const value = { pets, adoptPet };
  return <PetContext.Provider value={value}>{children}</PetContext.Provider>;
}
