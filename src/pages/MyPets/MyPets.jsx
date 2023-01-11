import { useContext, useState } from "react";
import PetList from "../../components/PetList/PetList";
import { AuthContext } from "../../context/authContext";
import { PetContext } from "../../context/petContext";

export const MyPets = () => {
  const { pets } = useContext(PetContext);
  const { user } = useContext(AuthContext);
  const [mode, setMode] = useState("all");

  if (!user) {
    return <div> Please login to view your pets</div>;
  }

  // user.favoritePets = ['1','2','3','4','5']
  // user.favoritePets.includes('1') // true
  // arr.filter - filter out every element in the array that return false

  console.log(user);
  const shownPets =
    mode === "all"
      ? pets
      : // keep only pets, that their id is in user.favoritePets
        pets.filter((pet) => user.favoritePets.includes(pet._id));

  return (
    <div>
      <div>
        <button onClick={() => setMode("all")}>All Pets</button>
        <button onClick={() => setMode("saved")}>My Saved Pets</button>
      </div>
      <PetList pets={shownPets} />
    </div>
  );
};
