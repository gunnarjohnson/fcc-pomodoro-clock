import React from 'react';

const Timer = (props) => (
  <div className="timer">
    <h2 id="timer-label" className="timer__title">{!props.breakActive ? 'Session' : 'Break'}</h2>
    <p id="time-left" className="timer__content">{props.minutes}:{props.seconds}</p>
    <button id="start_stop" className="timer__button" onClick={props.startStopTimer}>Start/Stop</button>
    <button id="reset" className="timer__button" onClick={props.resetTimer}>Reset</button>
  </div>
);

export default Timer;