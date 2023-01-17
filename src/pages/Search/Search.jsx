import React, { useContext, useState } from "react";
import "./Search.css";
import { MDBInputGroup, MDBInput, MDBRadio } from "mdb-react-ui-kit";
import PetList from "../../components/PetList/PetList";
import { PetContext } from "../../context/petContext";
import Form from "react-bootstrap/Form";
import { useParams } from "react-router-dom";

export default function Search() {
  const { pets } = useContext(PetContext);
  const { type } = useParams();
  const [searchType, setSearchType] = useState(type || "");
  const [searchName, setSearchName] = useState("");

  const [minHeight, setMinHeight] = useState(0);
  const [maxHeight, setMaxHeight] = useState(1000);
  const [minWeight, setMinWeight] = useState(0);
  const [maxWeight, setMaxWeight] = useState(1000);

  const [searchMode, setSearchMode] = useState("basic");
  const [adoptionStatus, setAdoptionStatus] = useState("all");

  const filteredPets = pets.filter((pet) => {
    if (searchMode === "basic") {
      return pet.type.toLowerCase().includes(searchType.toLowerCase());
    }

    console.log(typeof pet.weight, pet.height);

    return (
      pet.type.toLowerCase().includes(searchType.toLowerCase()) &&
      pet.name.toLowerCase().includes(searchName.toLowerCase()) &&
      (adoptionStatus === "all"
        ? true
        : adoptionStatus === "available"
        ? pet.owner === ""
        : pet.owner) &&
      +pet.weight >= minWeight &&
      +pet.weight <= maxWeight &&
      +pet.height >= minHeight &&
      +pet.height <= maxHeight
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

        <div className="inputs">
          <MDBInputGroup>
            <MDBInput
              label="Search pet type"
              placeholder="Pet Type"
              value={searchType}
              onChange={(e) => setSearchType(e.target.value)}
            />
          </MDBInputGroup>
          {searchMode !== "basic" ? (
            <>
              <MDBInputGroup>
                <MDBInput
                  label="Search pet name"
                  value={searchName}
                  onChange={(e) => setSearchName(e.target.value)}
                />
              </MDBInputGroup>
              <MDBInputGroup>
                <MDBInput
                  label="Min weight"
                  type="number"
                  min={0}
                  value={minWeight}
                  onChange={(e) => setMinWeight(e.target.value)}
                />
              </MDBInputGroup>
              <MDBInputGroup>
                <MDBInput
                  label="Max weight"
                  type="number"
                  max={10000}
                  value={maxWeight}
                  onChange={(e) => setMaxWeight(e.target.value)}
                />
              </MDBInputGroup>

              <MDBInputGroup>
                <MDBInput
                  label="Min height"
                  type="number"
                  min={0}
                  value={minHeight}
                  onChange={(e) => setMinHeight(e.target.value)}
                />
              </MDBInputGroup>
              <MDBInputGroup>
                <MDBInput
                  label="Max height"
                  type="number"
                  max={1000}
                  value={maxHeight}
                  onChange={(e) => setMaxHeight(e.target.value)}
                />
              </MDBInputGroup>

              <Form.Group
                className="adoption-status-input"
                controlId="AdoptionStatus"
              >
                <Form.Select
                  placeholder="Adoption Status"
                  name="adoptionStatus"
                  onChange={(e) => setAdoptionStatus(e.target.value)}
                  value={adoptionStatus}
                >
                  <option value="all">Adoption Status</option>
                  <option value="available">Available</option>
                  <option value="adopted">Adopted</option>
                </Form.Select>
              </Form.Group>
            </>
          ) : null}
        </div>
      </div>
      <PetList pets={filteredPets} />
    </div>
  );
}
