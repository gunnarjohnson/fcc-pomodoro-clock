import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';

const Break = (props) => (
  <section className="break clock-section">
    <div className="break-container clock-section-container">
      <h2 id="break-label" className="break__title clock-section__title">Break Length</h2>
      <p id="break-length" className="break__content clock-section__content">{props.breakTime}</p>
      <div className="break__button-container clock-section__button-container clock-section__button-container--small">
        <button id="break-decrement" className="break__button clock-section__button" onClick={props.breakDecrement}>
          <FontAwesomeIcon icon={faMinus} />
        </button>
        <button id="break-increment" className="break__button clock-section__button" onClick={props.breakIncrement}>
          <FontAwesomeIcon icon={faPlus} />
        </button>
      </div>
    </div>
  </section>
);

export default Break;