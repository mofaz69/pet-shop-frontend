import React from "react";
import "./Search.css";
import { MDBInputGroup, MDBInput, MDBIcon, MDBBtn } from "mdb-react-ui-kit";

export default function Search() {
  return (
    <MDBInputGroup>
      <MDBInput label="Search" />
      <MDBBtn rippleColor="dark">
        <MDBIcon icon="search" />
      </MDBBtn>
    </MDBInputGroup>
  );
}
