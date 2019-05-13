import React from 'react';

const Gameboard = (props) => {
    var boardList = props.pos.map(x => <p>{x}</p>);

    return (
        <div>
          <p>Gameboard!</p>
          {boardList}
        </div>
    )
}

export default Gameboard;