import React from 'react';

const Break = (props) => (
  <div className="break">
    <h2 id="break-label" className="break__title">Break Length</h2>
    <p id="break-length" className="break__content">{props.breakTime}</p>
    <button id="break-decrement" className="break__button" onClick={props.breakDecrement}>-</button>
    <button id="break-increment" className="break__button" onClick={props.breakIncrement}>+</button>
  </div>
);

export default Break;