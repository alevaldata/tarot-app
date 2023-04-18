import { useState } from "react";
import Respuesta from "./Respuesta";

const dorso_img_url = "https://lainfo.es/tarot-si-no/dorso-carta.jpg";

function TiradaTarot() {
  const [cartas, setCartas] = useState([
    { id: "0", imgUrl: dorso_img_url },
    { id: "1", imgUrl: dorso_img_url },
    { id: "2", imgUrl: dorso_img_url },
  ]);

  /* traer datos de cartas para tirar */
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
