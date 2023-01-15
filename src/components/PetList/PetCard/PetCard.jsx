import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

export const PetCard = ({ pet }) => {
  return (
    <div key={pet._id}>
      <Card style={{ width: "18rem" }}>
        <div className="petPic">
          <Card.Img
            variant="top"
            src={pet.picture || pet.imageUrl}
            className="petImage"
          />
        </div>
        <Card.Body>
          <Card.Title>{pet.name}</Card.Title>
          <Card.Body>
            {pet.owner ? "Adopted" : "Available for adoption"}
          </Card.Body>
          <Link to={"/mypet/" + pet._id}>
            <Button>Click To see more!</Button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
};
