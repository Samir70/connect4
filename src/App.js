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
    var headerCol = this.state.sideToMove === 'Yellow' ? 'yellowToPlay' : 'redToPlay';
    return (
      <div className="App">
        <h1 className={headerCol}>CONNECT -- 4</h1>
        <Gameboard pos={this.state.boardPos} />
      </div>
    );
  }
}

export default App;
