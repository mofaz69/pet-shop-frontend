import React, { useContext, useState } from "react";
import "./PetList.css";

import { PetCard } from "./PetCard/PetCard";
// import React, { useState } from "react";

export default function PetList({ pets }) {
  return (
    <div className="headerMyPets">
      {pets.length === 0 ? (
        <div className="empty">No pets found</div>
      ) : (
        <div className="petsCard">
          {pets.map((pet) => {
            return <PetCard key={pet._id} pet={pet} />;
          })}
        </div>
      )}
    </div>
  );
}
