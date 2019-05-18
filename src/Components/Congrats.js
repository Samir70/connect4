import React from 'react';
import './Congrats.css';

const Congrats = (props) => {
    return (
    <div className='fancyText winNotice' >
        <p classname='winNotice' >{props.side} <br />has<br />won!!!!!!!!</p>
    </div>
    )
}

export default Congrats;