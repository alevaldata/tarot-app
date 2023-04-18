import { useEffect, useState } from "react";
import Tirada from "./Tirada";

function TarotCards() {
  const [cartas, setCartas] = useState([]);
  const [tirar, setTirar] = useState(true);

  /* para traer la data de las cartas */
  useEffect(() => {
    fetch("src/data/tarot-cards.json")
      .then((res) => res.json())
      .then((data) => {
        setCartas(data);
      })
      .catch((err) => console.error(err));
  }, [tirar]);

  /* para volver a tirar */
  function handleClick() {
    setTirar(!tirar);
  }

  return (
    <>
      <Tirada cartas={cartas} />
      <button onClick={handleClick}>Tirar cartas de nuevo</button>
    </>
  );
}

export default TarotCards;
