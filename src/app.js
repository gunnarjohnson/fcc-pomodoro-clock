import React from 'react';
import ReactDOM from 'react-dom';
import PomodoroClock from './components/PomodoroClock';
import './styles/styles.css';
import './assets/audio/pom-clock-alarm.mp3';

ReactDOM.render(<PomodoroClock />, document.getElementById('app'));