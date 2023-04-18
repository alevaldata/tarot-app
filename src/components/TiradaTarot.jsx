import { useState } from "react";
import Respuesta from "./Respuesta";

function TiradaTarot() {
  const [cartas, setCartas] = useState([
    { id: "0", imgUrl: "https://lainfo.es/tarot-si-no/dorso-carta.jpg" },
    { id: "1", imgUrl: "https://lainfo.es/tarot-si-no/dorso-carta.jpg" },
    { id: "2", imgUrl: "https://lainfo.es/tarot-si-no/dorso-carta.jpg" },
  ]);

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
    <main>
      <Respuesta cartas={cartas} />
      <button onClick={handleClick}>Tirar cartas</button>
    </main>
  );
}

export default TiradaTarot;
