import React from 'react';
import Gameboard from './Components/Gameboard';
import {startPos} from './Modules/BoardHandler';
import './App.css';

class App extends React.Component {
  state = {
    boardPos : startPos, 
    sideToMove : 'Yellow'
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          This will be a Connect 4 game!
        </header>
        <Gameboard pos={this.state.boardPos} />
      </div>
    );
  }
}

export default App;
