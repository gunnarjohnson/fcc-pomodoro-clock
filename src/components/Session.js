import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';

const Session = (props) => (
  <section className="session clock-section">
    <div className="session-container clock-section-container">
      <h2 id="session-label" className="session__title clock-section__title">Session Length</h2>
      <p id="session-length" className="session__content clock-section__content">{props.sessionTime}</p>
      <div className="session__button-container clock-section__button-container clock-section__button-container--small">
        <button id="session-decrement" onClick={props.sessionDecrement} className="session__button clock-section__button">
          <FontAwesomeIcon icon={faMinus} />
        </button>
        <button id="session-increment" onClick={props.sessionIncrement} className="session__button clock-section__button">
          <FontAwesomeIcon icon={faPlus} />
        </button>
      </div>
    </div>
  </section>
);

export default Session;