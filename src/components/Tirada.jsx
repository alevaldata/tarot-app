function Tirada({ cartas }) {
  const nuevaTirada = cartas.sort(() => Math.random() - 0.5).slice(0, 3);
  const recuento = {};
  let resTirada;

  nuevaTirada.forEach((carta) => {
    if (recuento[carta.answer]) {
      recuento[carta.answer]++;
    } else {
      recuento[carta.answer] = 1;
    }
  });

  if (recuento.yes >= 2) {
    resTirada = "sí";
  } else if (recuento.no >= 2) {
    resTirada = "no";
  } else {
    resTirada = "tal vez...";
  }

  return (
    <>
      <div className="cards-container">
        {nuevaTirada.map((carta) => {
          return (
            <div className="tarot-card" key={carta.id}>
              <h1>{carta.name}</h1>
              <img src={carta.imgUrl}></img>
              <p>Significado: {carta.meaning}</p>
            </div>
          );
        })}
      </div>
      <p className="res-tirada">
        La respuesta es <b>{resTirada}</b>
      </p>
    </>
  );
}

export default Tirada;
