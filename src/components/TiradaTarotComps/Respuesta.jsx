function Respuesta({ cartas }) {
  const ansCount = {};

  /* contar respuestas */
  cartas.forEach((carta) => {
    if (ansCount[carta.answer]) {
      ansCount[carta.answer]++;
    } else {
      ansCount[carta.answer] = 1;
    }
  });

  let resTirada;
  /* determinar respuesta de tirada */
  if (ansCount.yes >= 2) {
    resTirada = "sí";
  } else if (ansCount.no >= 2) {
    resTirada = "no";
  } else if ((ansCount.yes == 1 && ansCount.no == 1) || ansCount.maybe >= 2) {
    resTirada = "tal vez...";
  }

  /* estilo condicional segun respuesta */
  const resBgColor = {
    background: "",
  };

  if (resTirada == "sí") {
    resBgColor.background = "lawngreen";
  } else if (resTirada == "no") {
    resBgColor.background = "rgb(255, 24, 24)";
  } else if (resTirada == "tal vez...") {
    resBgColor.background = "gold";
  }

  return (
    <>
      {resTirada ? (
        <p className="res-tirada" style={resBgColor}>
          La respuesta es <b>{resTirada}</b>
        </p>
      ) : (
        <p className="res-tirada">Piensa una pregunta de sí/no</p>
      )}
    </>
  );
}

export default Respuesta;
