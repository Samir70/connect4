import React from 'react';
import './Congrats.css';

const Congrats = (props) => {
    return (
    <div className='winAppear' >
        <p className='fancyText' >{props.side} <br />has<br />won!!!!!!!!</p>
    </div>
    )
}

export default Congrats;