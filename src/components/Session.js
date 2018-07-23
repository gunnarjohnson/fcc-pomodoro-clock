import React from 'react';

const Session = (props) => (
  <div>
    <h2 id="session-label">Session Length</h2>
    <p id="session-length">{props.sessionTime}</p>
    <button id="session-decrement" onClick={props.sessionDecrement}>-</button>
    <button id="session-increment" onClick={props.sessionIncrement}>+</button>
  </div>
);

export default Session;