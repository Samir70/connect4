import React from 'react';
import './Gameboard.css';

const Gameboard = (props) => {
    var boardList = props.pos.map(x => <p>{x}</p>);

    return (
        <div>
          <p>Gameboard!</p>
          {boardList}

          <table className="gameBoard" >
              <tbody>
                 <tr>
                     <td class="black"></td>
                     <td class="yellow"></td>
                     <td class="red"></td>
                 </tr>
                 <tr>
                     <td class="black"></td>
                     <td class="yellow"></td>
                     <td class="red"></td>
                 </tr>
              </tbody>
          </table>
        </div>
    )
}

export default Gameboard;