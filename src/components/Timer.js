import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause, faUndoAlt } from '@fortawesome/free-solid-svg-icons';

const Timer = (props) => (
  <section className="timer clock-section">
    <div className={props.timerActive ? "timer-container clock-section-container clock-section-container--active" : "timer-container clock-section-container"}>
      <h2 id="timer-label" className="timer__title clock-section__title">{!props.breakActive ? 'Session' : 'Break'}</h2>
      <p id="time-left" className="timer__content clock-section__content">{props.minutes}:{props.seconds}</p>
      <div className="timer__button-container clock-section__button-container clock-section__button-container--large">
        <button id="start_stop" className="timer__button clock-section__button" onClick={props.startStopTimer}>
          {!props.timerActive ? <FontAwesomeIcon icon={faPlay} /> : <FontAwesomeIcon icon={faPause} />}  
        </button>
        <button id="reset" className="timer__button clock-section__button" onClick={props.resetTimer}>
          <FontAwesomeIcon icon={faUndoAlt} />
        </button>
      </div>
    </div>
  </section>
);

export default Timer;