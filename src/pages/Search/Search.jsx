import React, { useContext, useState } from "react";
import "./Search.css";
import {
  MDBInputGroup,
  MDBInput,
  MDBIcon,
  MDBBtn,
  MDBRadio,
} from "mdb-react-ui-kit";
import PetList from "../../components/PetList/PetList";
import { PetContext } from "../../context/petContext";

export default function Search() {
  const { pets } = useContext(PetContext);
  const [searchText, setSearchText] = useState("");
  const [searchMode, setSearchMode] = useState("basic");

  const filteredPets = pets.filter((pet) => {
    if (searchMode === "basic") {
      return pet.type.includes(searchText);
    }

    const exampleMaxHeight = 30;

    return (
      pet.type.includes(searchText) &&
      pet.name.includes(searchText) &&
      pet.height <= exampleMaxHeight
    );
  });

  return (
    <div>
      <div className="search-location">
        <MDBInputGroup>
          <MDBRadio
            name="radioNoLabel"
            id="basic-search"
            label="Basic"
            checked={searchMode === "basic"}
            onChange={() => setSearchMode("basic")}
          />
          <MDBRadio
            name="radioNoLabel"
            id="advanced-search"
            label="Advanced Search"
            checked={searchMode !== "basic"}
            onChange={() => setSearchMode("advanced")}
          />
        </MDBInputGroup>

        {searchMode === "basic" ? (
          <MDBInputGroup>
            <MDBInput
              label="Search"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            />
            <MDBBtn rippleColor="dark" onClick={() => {}}>
              <MDBIcon icon="search" />
            </MDBBtn>
          </MDBInputGroup>
        ) : (
          <div>advanced</div>
        )}
      </div>
      <PetList pets={filteredPets} />
    </div>
  );
}
