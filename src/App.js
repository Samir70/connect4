import React from 'react';
import Gameboard from './Components/Gameboard';
import './App.css';

class App extends React.Component {
  state = {
    boardPos : '', 
    sideToMove : 'Yellow'
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          This will be a Connect 4 game!
        </header>
        <Gameboard />
      </div>
    );
  }
}

export default App;
