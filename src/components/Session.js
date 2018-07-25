import React from 'react';

const Session = (props) => (
  <div className="session">
    <h2 id="session-label" className="session__title">Session Length</h2>
    <p id="session-length" className="session__content">{props.sessionTime}</p>
    <button id="session-decrement" onClick={props.sessionDecrement} className="session__button">-</button>
    <button id="session-increment" onClick={props.sessionIncrement} className="session__button">+</button>
  </div>
);

export default Session;