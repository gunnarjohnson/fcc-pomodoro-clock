import React from 'react';

const Break = (props) => (
  <section className="break app-section">
    <div className="break-container container">
      <h2 id="break-label" className="break__title title">Break Length</h2>
      <p id="break-length" className="break__content content">{props.breakTime}</p>
      <div className="break__button-container button-container button-container--small">
        <button id="break-decrement" className="break__button button" onClick={props.breakDecrement}>-</button>
        <button id="break-increment" className="break__button button" onClick={props.breakIncrement}>+</button>
      </div>
    </div>
  </section>
);

export default Break;