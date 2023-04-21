function Respuesta({ cartas }) {
  /* contar respuestas */
  const ansCount = {};

  cartas.forEach((carta) => {
    if (ansCount[carta.answer]) {
      ansCount[carta.answer]++;
    } else {
      ansCount[carta.answer] = 1;
    }
  });

  /* determinar respuesta de tirada */
  const respuestas = { yes: "sí", no: "no", maybe: "tal vez..." };
  let resTirada;

  if (ansCount.yes >= 2) {
    resTirada = respuestas.yes;
  } else if (ansCount.no >= 2) {
    resTirada = respuestas.no;
  } else if ((ansCount.yes == 1 && ansCount.no == 1) || ansCount.maybe >= 2) {
    resTirada = respuestas.maybe;
  }

  /* estilo condicional segun respuesta */
  const resBgColor = {
    background: "",
  };

  if (resTirada == respuestas.yes) {
    resBgColor.background = "lawngreen";
  } else if (resTirada == respuestas.no) {
    resBgColor.background = "rgb(255, 24, 24)";
  } else if (resTirada == respuestas.maybe) {
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
