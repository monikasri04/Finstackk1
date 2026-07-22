import animals from "../components/animals.json";
import Button from "@mui/material/Button";
import { useState } from "react";

type Animal = {
  id: number;
  title: string;
  image: string;
  description: string;
};

function Card() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextCard = () => {
    setCurrentIndex((prev) => (prev + 1) % animals.length);
  };

  const animal: Animal = animals[currentIndex];

  return (
    <div className="card-container">
      <div className="card">
        <img src={animal.image} alt={animal.title} />

        <div className="card-content">
          <h2>{animal.title}</h2>
          <p>{animal.description}</p>

          <Button variant="contained" onClick={nextCard}>
            Next
          </Button>
        </div>

      </div>
    </div>
  );
}

export default Card;
