import React from 'react';

const Timer = (props) => (
  <div>
    <h2 id="timer-label">{!props.breakActive ? 'Session' : 'Break'}</h2>
    <p id="time-left">{props.minutes}:{props.seconds}</p>
    <button id="start_stop" onClick={props.startStopTimer}>Start/Stop</button>
    <button id="reset" onClick={props.resetTimer}>Reset</button>
  </div>
);

export default Timer;