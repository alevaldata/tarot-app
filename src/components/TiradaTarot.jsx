import { useState } from "react";
import data from "../data/tarot-cards.json";
import TarotCard from "./TiradaTarotComps/TarotCard";
import Respuesta from "./TiradaTarotComps/Respuesta";

const dorso_img_url = "https://lainfo.es/tarot-si-no/dorso-carta.jpg";

function TiradaTarot() {
  const [cartas, setCartas] = useState([
    { id: "0", imgUrl: dorso_img_url },
    { id: "1", imgUrl: dorso_img_url },
    { id: "2", imgUrl: dorso_img_url },
  ]);

  /* obtener data necesaria del json */
  function handleClick() {
    /* fetch no funciona en gh-pages */
    /* fetch("src/data/tarot-cards.json")
      .then((res) => res.json())
      .then((data) => {
        setCartas(data.sort(() => Math.random() - 0.5).slice(0, 3));
      })
      .catch((err) => console.log(err)); */

    /* actualizar estado con 3 cartas random */
    setCartas(data.sort(() => Math.random() - 0.5).slice(0, 3));
  }

  return (
    <>
      <button onClick={handleClick}>Tirar cartas</button>
      <TarotCard cartas={cartas} />
      <Respuesta cartas={cartas} />
    </>
  );
}

export default TiradaTarot;
