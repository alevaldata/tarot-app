function Respuesta({ cartas }) {

  const ansCount = {}

  cartas.forEach((carta) => {
    if (ansCount[carta.answer]) {
      ansCount[carta.answer]++
    } else {
      ansCount[carta.answer] = 1;
    }
  });

  let resTirada;

  if (ansCount.yes >= 2) {
    resTirada = "sí";
  } else if (ansCount.no >= 2) {
    resTirada = "no";
  } else if ((ansCount.yes == 1 && ansCount.no == 1) || ansCount.maybe >= 2) {
    resTirada = "tal vez...";
  }

  return (
    <>
      {resTirada ? (
        <p className="res-tirada">
          La respuesta es <b>{resTirada}</b>
        </p>
      ) : (
        <p className="res-tirada">Piensa una pregunta de sí/no</p>
      )}
    </>
  );
}

export default Respuesta;
