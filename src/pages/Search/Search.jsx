import React, { useContext, useState } from "react";
import "./Search.css";
import { MDBInputGroup, MDBInput, MDBIcon, MDBBtn } from "mdb-react-ui-kit";
import PetList from "../../components/PetList/PetList";
import { PetContext } from "../../context/petContext";

export default function Search() {
  const { pets } = useContext(PetContext);
  const [searchPets, setSearchPets] = useState(searchPets);

  return (
    <div>
      <div className="search-location">
        <MDBInputGroup>
          <MDBInput label="Search" />
          <MDBBtn rippleColor="dark" onClick={() => setSearchPets(pets)}>
            <MDBIcon icon="search" />
          </MDBBtn>
        </MDBInputGroup>
      </div>
      <PetList pets={pets} />
    </div>
  );
}
