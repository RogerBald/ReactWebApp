import React from 'react';

function GameCard({ title, image, price, link, genre }) {
  return (
    <div className="game-card">
      <a href={link} target="_blank" rel="noopener noreferrer">
        <img src={image} alt={title} />
      </a>
      <div className="game-info">
        <h3>{title}</h3>
        {genre && <p>Gênero: {genre}</p>}
        <p>Preço: {price}</p>
      </div>
    </div>
  );
}

export default GameCard;
