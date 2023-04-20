import { useEffect, useState } from "react";
import Respuesta from "./Respuesta";
import data from "../data/tarot-cards.json";

const dorso_img_url = "https://lainfo.es/tarot-si-no/dorso-carta.jpg";

function TiradaTarot() {
  const [cartas, setCartas] = useState([
    { id: "0", imgUrl: dorso_img_url },
    { id: "1", imgUrl: dorso_img_url },
    { id: "2", imgUrl: dorso_img_url },
  ]);

  /* traer datos de cartas para tirar */
  function handleClick() {

    /* fetch no funciona en gh-pages
    fetch("src/data/tarot-cards.json")
      .then((res) => res.json())
      .then((data) => {
        setCartas(data);
      })
      .catch((err) => console.error(err)); */

    /* importar json y usar Spread para generar nuevo array */
    setCartas([...data]);
  }

  return (
    <main>
      <button onClick={handleClick}>Tirar cartas</button>
      <Respuesta cartas={cartas} />
    </main>
  );
}

export default TiradaTarot;
