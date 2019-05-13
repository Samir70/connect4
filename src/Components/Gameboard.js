import React from 'react';
import './Gameboard.css';

const makeTile = (c, i) => {
    var cl = '';
    var k = 'sq'+i;
    c === 'B' ? cl = 'black' : c==='Y' ? cl = 'yellow' : cl = 'red';
    return <td className={cl} key = {k} ></td>
}

const Gameboard = (props) => {
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