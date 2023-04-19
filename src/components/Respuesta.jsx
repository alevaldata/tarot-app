function Respuesta({ cartas }) {
  const nuevaTirada = cartas.sort(() => Math.random() - 0.5).slice(0, 3);
  const ansCount = {};
  let resTirada;

  nuevaTirada.forEach((carta) => {
    if (ansCount[carta.answer]) {
      ansCount[carta.answer]++;
    } else {
      ansCount[carta.answer] = 1;
    }
  });

  if (ansCount.yes >= 2) {
    resTirada = "sí";
  } else if (ansCount.no >= 2) {
    resTirada = "no";
  } else if ((ansCount.yes == 1 && ansCount.no == 1) || ansCount.maybe >= 2) {
    resTirada = "tal vez...";
  }

  return (
    <>
      <div className="cards-container" key={nuevaTirada.id}>
        {nuevaTirada.map((carta) => {
          return (
            <div className="tarot-card" key={carta.id}>
              <h1>{carta.name}</h1>
              <img src={carta.imgUrl}></img>
              <p>{carta.meaning}</p>
            </div>
          );
        })}
      </div>
      { resTirada ? (<p className="res-tirada">La respuesta es <b>{resTirada}</b></p>) : <p className="res-tirada">Piensa tu pregunta...</p>}
    </>
  );
}

export default Respuesta;
