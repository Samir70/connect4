import React from 'react';
import Gameboard from './Components/Gameboard';
import {startPos, makeMove} from './Modules/BoardHandler';
import './App.css';

class App extends React.Component {
  state = {
    boardPos : startPos
  }

  moveHandler = (move) => {
    var currentPos = Object.assign({}, this.state.boardPos);
    var result = makeMove(currentPos, move);
    if (result === 'NOT LEGAL') {
      console.log('need better illegal move notification')
    } else {
      this.setState({boardPos: result});
    }
  }

  render() {
    var headerCol = this.state.boardPos.sideToMove === 'Yellow' ? 'yellowToPlay' : 'redToPlay';
    if (this.state.boardPos.outCome === 'win') {
      console.log(this.state.boardPos.sideToMove, ' has won the game!!!!')
    }
    return (
      <div className="App">
        <h1 className={headerCol}>CONNECT -- 4</h1>
        <Gameboard pos={this.state.boardPos.pos} click={this.moveHandler} />
      </div>
    );
  }
}

export default App;
