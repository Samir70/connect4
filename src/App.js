import React from 'react';
import Gameboard from './Components/Gameboard';
import Congrats from './Components/Congrats'
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

  restartGame = () => {
    this.setState({boardPos : startPos})
  }

  render() {
    var headerCol = this.state.boardPos.sideToMove === 'Yellow' ? 'yellowToPlay' : 'redToPlay';
    
    return (
      <div className="App">
        <h1 className={headerCol}>CONNECT -- 4</h1>
        <button className='restartBtn' onClick={this.restartGame} >New Game</button>
        <Gameboard pos={this.state.boardPos.pos} click={this.moveHandler} />
        {this.state.boardPos.outCome === 'win' && <Congrats side = {this.state.boardPos.sideToMove} />}
      </div>
    );
  }
}

export default App;
