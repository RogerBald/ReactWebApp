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
        <h4>Data: 04/04/2024 - Horário: 13:46</h4>
        <div className="game-list">
          <GameCard
            title="Counter Strike-2"
            image="https://cdn.cloudflare.steamstatic.com/steam/apps/730/header.jpg?t=1711156045"
            price="Gratuito"
            link="https://store.steampowered.com/app/730/CounterStrike_Global_Offensive/"
            genre="FPS"
          />
          <GameCard
            title="Dota 2"
            image="https://cdn.cloudflare.steamstatic.com/steam/apps/570/header.jpg?t=1711742028"
            price="Gratuito"
            link="https://store.steampowered.com/app/570/Dota_2/"
            genre="MOBA"
          />
          <GameCard
            title="PUBG: BATTLEGROUNDS"
            image="https://cdn.cloudflare.steamstatic.com/steam/apps/578080/header.jpg?t=1712109624"
            price="Gratuito"
            link="https://store.steampowered.com/app/578080/PUBG_BATTLEGROUNDS/"
            genre="Battle Royale"
          />
          <GameCard
            title="Apex Legends"
            image="https://cdn.cloudflare.steamstatic.com/steam/apps/1172470/header.jpg?t=1712246915"
            price="Gratuito"
            link="https://store.steampowered.com/app/1172470/Apex_Legends/"
            genre="Battle Royale"
          />
          <GameCard
            title="HELLDIVERS™ 2"
            image="https://cdn.cloudflare.steamstatic.com/steam/apps/553850/header.jpg?t=1712248968"
            price="R$ 199,50"
            link="https://store.steampowered.com/app/553850/HELLDIVERS_2/"
            genre="Ação"
          />
          <GameCard
            title="Stardew Valley"
            image="https://cdn.cloudflare.steamstatic.com/steam/apps/413150/header.jpg?t=1712181829"
            price="R$ 24,99"
            link="https://store.steampowered.com/app/413150/Stardew_Valley/"
            genre="Simulação"
          />
          <GameCard
            title="Grand Theft Auto V"
            image="https://cdn.cloudflare.steamstatic.com/steam/apps/271590/header.jpg?t=1712242387"
            price="R$ 38,63"
            link="https://store.steampowered.com/app/271590/Grand_Theft_Auto_V/?l=portuguese"
            genre="Ação"
          />
          <GameCard
            title="Call of Duty®"
            image="https://cdn.cloudflare.steamstatic.com/steam/apps/1938090/header.jpg?t=1712178742"
            price="Gratuito"
            link="https://store.steampowered.com/app/1938090/Call_of_Duty/?l=brazilian"
            genre="FPS"
          />
          <GameCard
            title="Tom Clancy's Rainbow Six Siege"
            image="https://cdn.cloudflare.steamstatic.com/steam/apps/359550/header.jpg?t=1712248029"
            price="R$ 84,99"
            link="https://store.steampowered.com/app/359550/Tom_Clancys_Rainbow_Six_Siege/"
            genre="FPS"
          />
          <GameCard
            title="NARAKA: BLADEPOINT"
            image="https://cdn.cloudflare.steamstatic.com/steam/apps/1203220/header.jpg?t=1711374515"
            price="Gratuito"
            link="https://store.steampowered.com/app/1203220/NARAKA_BLADEPOINT/"
            genre="Batalha real"
          />
          <GameCard
            title="Path of Exile"
            image="https://cdn.cloudflare.steamstatic.com/steam/apps/238960/header.jpg?t=1712198270"
            price="Gratuito"
            link="https://store.steampowered.com/app/238960/Path_of_Exile/"
            genre="RPG"
          />
          <GameCard
            title="Baldur's Gate 3"
            image="https://cdn.cloudflare.steamstatic.com/steam/apps/1086940/header.jpg?t=1712246915"
            price="R$ 199,99"
            link="https://store.steampowered.com/app/1086940/Baldurs_Gate_3/"
            genre="RPG"
          />
          <GameCard
            title="War Thunder"
            image="https://cdn.cloudflare.steamstatic.com/steam/apps/236390/header.jpg?t=1712218339"
            price="Gratuito"
            link="https://store.steampowered.com/app/236390/War_Thunder/"
            genre="Simulação"
          />
          <GameCard
            title="Rust"
            image="https://cdn.cloudflare.steamstatic.com/steam/apps/252490/header.jpg?t=1712242309"
            price="R$ 103,49"
            link="https://store.steampowered.com/app/252490/Rust/"
            genre="Sobrevivência"
          />
          <GameCard
            title="Palworld"
            image="https://cdn.cloudflare.steamstatic.com/steam/apps/1623730/header.jpg?t=1712246915"
            price="R$ 80,09"
            link="https://store.steampowered.com/app/1623730/Palworld/?l=brazilian"
            genre="Aventura"
          />
        </div>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
