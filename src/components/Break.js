import React from 'react';

const Break = (props) => (
  <div>
    <h2 id="break-label">Break Length</h2>
    <p id="break-length">{props.breakTime}</p>
    <button id="break-decrement" onClick={props.breakDecrement}>-</button>
    <button id="break-increment" onClick={props.breakIncrement}>+</button>
  </div>
);

export default Break;