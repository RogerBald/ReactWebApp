import React from 'react';

function GameCard({ title, image, price }) {
  return (
    <div className="game-card">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>Preço: {price}</p>
    </div>
  );
}

export default GameCard;