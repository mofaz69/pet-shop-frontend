import React, { useCallback, useEffect, useMemo, useState } from "react";
import { domain } from "../constants";
import { useAuth } from "./authContext";

export const PetContext = React.createContext({
  pets: [],
  adoptPet: () => {},
  fosterPet: () => {},
});

export function PetContextProvider({ children }) {
  const { setUser, user } = useAuth();
  const [pets, setPets] = useState([]);

  const getAllPets = async () => {
    const response = await fetch(`${domain}/pet`);
    const data = await response.json();
    if (response.status !== 200) {
      throw new Error(data.message);
    }

    setPets(data);
  };

  const adoptPet = useCallback(
    async (petId) => {
      const response = await fetch(`${domain}/pet/${petId}/adopt`, {
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
    },
    [user._id]
  );

  const fosterPet = useCallback(
    async (petId) => {
      const response = await fetch(`${domain}/pet/${petId}/foster`, {
        method: "POST",
        credentials: "include",
      });

      const data = await response.json();
      alert(data.message);

      setPets((pets) => {
        const updatedPets = [...pets];
        const petIndex = updatedPets.findIndex((p) => p._id === petId);
        updatedPets[petIndex].fosterer = user._id;
        return updatedPets;
      });
    },
    [user._id]
  );

  const returnPet = async (petId) => {
    const response = await fetch(`${domain}/pet/${petId}/return`, {
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
  const returnPetFromFoster = async (petId) => {
    await fetch(`${domain}/pet/${petId}/return-foster`, {
      method: "POST",
      credentials: "include",
    });

    setPets((pets) => {
      const updatedPets = [...pets];
      const petIndex = updatedPets.findIndex((p) => p._id === petId);
      updatedPets[petIndex].fosterer = "";
      return updatedPets;
    });
  };

  const savePetToUser = useCallback(
    async (petId) => {
      const response = await fetch(`${domain}/pet/${petId}/save`, {
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
    },
    [setUser]
  );

  const removePetFromUser = useCallback(
    async (petId) => {
      const response = await fetch(`${domain}/pet/${petId}/save`, {
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
    },
    [setUser]
  );

  // load all pets on startup
  useEffect(() => {
    getAllPets();
  }, []);

  const searchPets = async (query) => {
    const response = await fetch(`${domain}/pet/search`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(query),
    });
    const searchResults = await response.json();
    if (response.status !== 200) {
      throw new Error(searchResults.message);
    }
    return searchResults;
  };

  const addPet = useCallback(async (pet) => {
    // send pet to server
    const response = await fetch(`${domain}/pet`, {
      method: "POST",
      credentials: "include",
      body: pet, // pet is formData instance, doesn't need to be stringified
    });
    const newPet = await response.json();
    if (response.status !== 200) {
      throw new Error(newPet.message);
    }

    // update the react state in the frontend
    setPets((prevPets) => [...prevPets, newPet]);
  }, []);

  const editPet = useCallback(async (pet) => {
    const response = await fetch(`${domain}/pet/${pet.get("_id")}`, {
      method: "PUT",
      credentials: "include",
      body: pet,
    });
    const editedPet = await response.json();
    if (response.status !== 200) {
      throw new Error(editedPet.message);
    }
    console.log(editedPet);
    setPets((prevPets) => {
      const updatedPets = [...prevPets];
      const index = prevPets.findIndex((p) => p._id === editedPet._id);
      updatedPets[index] = editedPet;
      return updatedPets;
    });
  }, []);

  const value = useMemo(
    () => ({
      pets,
      adoptPet,
      fosterPet,
      savePetToUser,
      returnPet,
      setPets,
      addPet,
      editPet,
      searchPets,
      removePetFromUser,
      returnPetFromFoster,
    }),
    [
      adoptPet,
      fosterPet,
      pets,
      removePetFromUser,
      savePetToUser,
      editPet,
      addPet,
    ]
  );

  return <PetContext.Provider value={value}>{children}</PetContext.Provider>;
}
