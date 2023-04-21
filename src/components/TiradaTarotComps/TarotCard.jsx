function TarotCard({ cartas }) {

  const tarotCard = cartas.map((carta) => (
    <div className="tarot-card" key={carta.id}>
      <h1>{carta.name}</h1>
      <img src={carta.imgUrl}></img>
      <p>{carta.meaning}</p>
    </div>
  ));

  return <div className="cards-container">{tarotCard}</div>;
}

export default TarotCard;