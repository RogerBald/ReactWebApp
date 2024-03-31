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
        <h2>Jogos em Destaque</h2>
        <div className="game-list">
          <GameCard
            title="The Witcher 3: Wild Hunt"
            image="https://via.placeholder.com/200"
            price="$19.99"
          />
          <GameCard
            title="Cyberpunk 2077"
            image="https://via.placeholder.com/200"
            price="$49.99"
          />
          {/* Adicione mais jogos conforme necessário */}
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;