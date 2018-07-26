import React from 'react';

const Session = (props) => (
  <section className="session app-section">
    <div className="session-container container">
      <h2 id="session-label" className="session__title title">Session Length</h2>
      <p id="session-length" className="session__content content">{props.sessionTime}</p>
      <div className="session__button-container button-container button-container--small">
        <button id="session-decrement" onClick={props.sessionDecrement} className="session__button button">-</button>
        <button id="session-increment" onClick={props.sessionIncrement} className="session__button button">+</button>
      </div>
    </div>
  </section>
);

export default Session;