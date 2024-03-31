import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import GameCard from './components/GameCard';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <h2>Jogos mais jogados</h2>
        <h3>Data: 31/03/2024</h3>
        <h4>Horário: 17:57</h4>
        <div className="game-list">
          <GameCard
            title="Counter Strike-2"
            image="https://cdn.cloudflare.steamstatic.com/steam/apps/730/header.jpg?t=1711156045"
            price="Gratuito"
          />
          <GameCard
            title="Dota 2"
            image="https://cdn.cloudflare.steamstatic.com/steam/apps/570/header.jpg?t=1711742028"
            price="Gratuito"
          />
          <GameCard
            title="HELLDIVRS™ 2"
            image="https://cdn.cloudflare.steamstatic.com/steam/apps/553850/header.jpg?t=1711815915"
            price="R$199.50"
          />
          <GameCard
            title="Stardew Valley"
            image="https://cdn.cloudflare.steamstatic.com/steam/apps/413150/header.jpg?t=1711572470"
            price="R$24.99"
          />
          <GameCard
            title="PUBG: BATTLEGROUNDS"
            image="https://cdn.cloudflare.steamstatic.com/steam/apps/578080/header.jpg?t=1711497731"
            price="Gratuito"
          />
          <GameCard
            title="Tom Clancy's Rainbow Six Siege"
            image="https://cdn.cloudflare.steamstatic.com/steam/apps/359550/header.jpg?t=1711830316"
            price="R$84.99"
          />
          <GameCard
            title="Path of Exile"
            image="https://cdn.cloudflare.steamstatic.com/steam/apps/238960/header.jpg?t=1711857927"
            price="Gratuito"
          />
          <GameCard
            title="Baldur's Gate 3"
            image="https://cdn.cloudflare.steamstatic.com/steam/apps/1086940/header.jpg?t=1711723862"
            price="R$199.99"
          />
          <GameCard
            title="Apex Legends"
            image="https://cdn.cloudflare.steamstatic.com/steam/apps/1172470/header.jpg?t=1711588022"
            price="Gratuito"
          />
        </div>
      </main>
      <Footer/>
    </div>
  );
}

export default App;