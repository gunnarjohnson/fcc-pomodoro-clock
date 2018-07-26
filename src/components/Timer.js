import React from 'react';

const Timer = (props) => (
  <section className="timer app-section">
    <div className={props.timerActive ? "timer-container container container--active" : "timer-container container"}>
      <h2 id="timer-label" className="timer__title title">{!props.breakActive ? 'Session' : 'Break'}</h2>
      <p id="time-left" className="timer__content content">{props.minutes}:{props.seconds}</p>
      <div className="timer__button-container button-container button-container--large">
        <button id="start_stop" className="timer__button button" onClick={props.startStopTimer}>St/Ps</button>
        <button id="reset" className="timer__button button" onClick={props.resetTimer}>Rs</button>
      </div>
    </div>
  </section>
);

export default Timer;