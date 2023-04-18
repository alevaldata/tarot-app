import { useState } from "react";
import Tirada from "./Tirada";

function TiradaTarot() {
  const [cartas, setCartas] = useState();

  /* para volver a tirar */
  function handleClick() {
    fetch("src/data/tarot-cards.json")
      .then((res) => res.json())
      .then((data) => {
        setCartas(data);
      })
      .catch((err) => console.error(err));
  }

  return (
    <>
      {cartas && <Tirada cartas={cartas} />}
      <button onClick={handleClick}>Tirar cartas</button>
    </>
  );
}

export default TiradaTarot;
