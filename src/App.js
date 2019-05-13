import React from 'react';
import Gameboard from './Components/Gameboard';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        This will be a Connect 4 game!
      </header>
      <Gameboard />
    </div>
  );
}

export default App;
