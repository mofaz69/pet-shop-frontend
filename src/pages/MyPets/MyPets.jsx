import { useContext, useState } from "react";
import PetList from "../../components/PetList/PetList";
import { AuthContext } from "../../context/authContext";
import { PetContext } from "../../context/petContext";
import Button from "react-bootstrap/Button";
import "./MyPets.css";

export const MyPets = () => {
  const { pets } = useContext(PetContext);
  const { user, isLoggedIn } = useContext(AuthContext);
  const [mode, setMode] = useState("adopted");

  if (!user) {
    return <div> Please login to view your pets</div>;
  }

  // user.favoritePets = ['1','2','3','4','5']
  // user.favoritePets.includes('1') // true
  // arr.filter - filter out every element in the array that return false

  console.log(user);
  const shownPets =
    mode === "adopted"
      ? pets.filter((p) => p.owner === user._id)
      : // keep only pets, that their id is in user.favoritePets
        pets.filter((pet) => user.favoritePets.includes(pet._id));

  return (
    <div className="myPetsContainer">
      <div className="myPetsButtons">
        <Button variant="primary" onClick={() => setMode("adopted")}>
          My Adopted Pets
        </Button>{" "}
        <Button variant="primary" onClick={() => setMode("saved")}>
          My Saved Pets
        </Button>
      </div>
      {isLoggedIn ? (
        <h1 className="text-center">
          You currently have {shownPets.length} {mode} pets
        </h1>
      ) : null}
      <PetList pets={shownPets} />
    </div>
  );
};
