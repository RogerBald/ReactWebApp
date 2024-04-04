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
        <h2>Momento da coleta dos dados</h2>
        <h3>Data: 31/03/2024</h3>
        <h4>Horário: 17:57</h4>
        <div className="game-list">
          <GameCard
            title="Counter Strike-2"
            image="https://cdn.cloudflare.steamstatic.com/steam/apps/730/header.jpg?t=1711156045"
            price="Gratuito"
            link="https://store.steampowered.com/app/730/CounterStrike_Global_Offensive/"
          />
          <GameCard
            title="Dota 2"
            image="https://cdn.cloudflare.steamstatic.com/steam/apps/570/header.jpg?t=1711742028"
            price="Gratuito"
            link="https://store.steampowered.com/app/570/Dota_2/"
          />
          <GameCard
            title="HELLDIVRS™ 2"
            image="https://cdn.cloudflare.steamstatic.com/steam/apps/553850/header.jpg?t=1711815915"
            price="R$199.50"
            link="https://store.steampowered.com/app/553850/HELLDIVERS/"
          />
          <GameCard
            title="Stardew Valley"
            image="https://cdn.cloudflare.steamstatic.com/steam/apps/413150/header.jpg?t=1711572470"
            price="R$24.99"
            link="https://store.steampowered.com/app/413150/Stardew_Valley/"
          />
          <GameCard
            title="PUBG: BATTLEGROUNDS"
            image="https://cdn.cloudflare.steamstatic.com/steam/apps/578080/header.jpg?t=1711497731"
            price="Gratuito"
            link="https://store.steampowered.com/app/578080/PUBG_BATTLEGROUNDS/"
          />
          <GameCard
            title="Tom Clancy's Rainbow Six Siege"
            image="https://cdn.cloudflare.steamstatic.com/steam/apps/359550/header.jpg?t=1711830316"
            price="R$84.99"
            link="https://store.steampowered.com/app/359550/Tom_Clancys_Rainbow_Six_Siege/"
          />
          <GameCard
            title="Path of Exile"
            image="https://cdn.cloudflare.steamstatic.com/steam/apps/238960/header.jpg?t=1711857927"
            price="Gratuito"
            link="https://store.steampowered.com/app/238960/Path_of_Exile/"
          />
          <GameCard
            title="Baldur's Gate 3"
            image="https://cdn.cloudflare.steamstatic.com/steam/apps/1086940/header.jpg?t=1711723862"
            price="R$199.99"
            link="https://store.steampowered.com/app/1086940/Baldurs_Gate_3/"
          />
          <GameCard
            title="Apex Legends"
            image="https://cdn.cloudflare.steamstatic.com/steam/apps/1172470/header.jpg?t=1711588022"
            price="Gratuito"
            link="https://store.steampowered.com/app/1172470/Apex_Legends/"
          />
        </div>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
