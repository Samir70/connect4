import React from 'react';
import './Gameboard.css';

const Gameboard = (props) => {
    const makeTile = (c, i) => {
        var cl = '';
        var k = 'sq'+i;
        switch (c) {      
          case 'Y' : {cl = 'yellow'; break}
          case 'R' : {cl = 'red'; break}
          case 'L' : {cl = 'legal'; break}
          default : {cl = 'black'}
        }
        return <td className={cl} key = {k} onClick={()=>props.click(i)} ></td>
    }
    var board = props.pos.join('').split('').map((x, i) => makeTile(x, i))

    return (
        <div>
          <table className="gameBoard" >
              <tbody>
                <tr>{board.splice(0, 7)}</tr>                
                <tr>{board.splice(0, 7)}</tr>                
                <tr>{board.splice(0, 7)}</tr>                
                <tr>{board.splice(0, 7)}</tr>                
                <tr>{board.splice(0, 7)}</tr>                
                <tr>{board.splice(0, 7)}</tr>                
                <tr>{board.splice(0, 7)}</tr>                
              </tbody>
          </table>
        </div>
    )
}

export default Gameboard;