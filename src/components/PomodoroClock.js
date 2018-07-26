import React from 'react';
import Audio from './Audio';
import Break from './Break';
import Header from './Header';
import Session from './Session';
import Timer from './Timer';

class PomodoroClock extends React.Component {
	state = {
    minutes: 25,
    seconds: '00',
    breakTime: 5,
    sessionTime: 25,
    breakActive: false,
    timerActive: false
  };

  startStopTimer = () => {
    if (!this.state.timerActive) {
      // Timer inactive: start timer
      this.setState({ timerActive: true });
      this.beep = document.getElementById('beep');
      this.interval = setInterval(() => {
        if (this.state.seconds == 0) {
          // 0 seconds
          if (this.state.minutes == 0) {
            // 0 minutes (and 0 seconds): play alarm
            this.beep.play();
            console.log(this.state.minutes + ':' + this.state.seconds);
            if (!this.state.breakActive) {
              // Break is inactive: start break
              this.setState({ 
                minutes: this.state.breakTime.toString().padStart(2, '0'),
                breakActive: true
              });
            } else {
              // Break is active: start session
              this.setState({
                minutes: this.state.sessionTime.toString().padStart(2, '0'),
                breakActive: false
              });
            }
          } else {
            // minutes > 0 (and 0 seconds): subtract 1 minute and set seconds to 59
            this.setState({ 
              minutes: (this.state.minutes - 1).toString().padStart(2, '0'),
              seconds: 59,
            });
          }
        } else {
          // seconds > 0: subtract 1 second
          this.setState({ seconds: (this.state.seconds - 1).toString().padStart(2, '0') });
        }
      }, 1000);
    } else {
      // "Pause" timer
      this.setState({ timerActive: false });
      clearInterval(this.interval);
    }
  };

  resetTimer = () => {
    // Clear timer (if active)
    clearInterval(this.interval);
    // Stop audio (if active)
    if (this.beep != undefined) {
      this.beep.pause();
      this.beep.currentTime = 0;
    }
    // Reset values
    this.setState({
      minutes: 25,
      seconds: '00',
      breakTime: 5,
      sessionTime: 25,
      breakActive: false,
      timerActive: false
    });
  };

  breakDecrement = () => {
    if (this.state.breakTime > 1 && !this.state.timerActive) {
      if (this.state.breakActive) {
        // Break active - modify minutes, seconds, and break time
        this.setState({ 
          minutes: (this.state.breakTime - 1).toString().padStart(2, '0'),
          seconds: '00',
          breakTime: this.state.breakTime - 1
        });
      } else {
        // Break inactive - only modify break time
        this.setState({ breakTime: this.state.breakTime - 1 });
      }
    }
  };

  breakIncrement = () => {
    if (this.state.breakTime < 60 && !this.state.timerActive) {
      if (this.state.breakActive) {
        // Break active - modify minutes, seconds, and break time
        this.setState({ 
          minutes: (this.state.breakTime + 1).toString().padStart(2, '0'),
          seconds: '00',
          breakTime: this.state.breakTime + 1
        });
      } else {
        // Break inactive - only modify break time
        this.setState({ breakTime: this.state.breakTime + 1 });
      }
    }
  };

  sessionDecrement = () => {
    if (this.state.sessionTime > 1 && !this.state.timerActive) {
      if (this.state.breakActive) {
        // Break active - only modify session time
        this.setState({ 
          sessionTime: this.state.sessionTime - 1
        });
      } else {
        // Break inactive - modify minutes, seconds, and session time
        this.setState({ 
          minutes: (this.state.sessionTime - 1).toString().padStart(2, '0'),
          seconds: '00',
          sessionTime: this.state.sessionTime - 1
        });
      }
    }
  };

  sessionIncrement = () => {
    if (this.state.sessionTime < 60 && !this.state.timerActive) {
      if (this.state.breakActive) {
        // Break active - only modify sesion time
        this.setState({ 
          sessionTime: this.state.sessionTime + 1
        });
      } else {
        // Break inactive - modify minutes, seconds, and session time
        this.setState({ 
          minutes: (this.state.sessionTime + 1).toString().padStart(2, '0'),
          seconds: '00',
          sessionTime: this.state.sessionTime + 1 
        });
      }
    }
  };
  
  render() {
    return (
      <div className="app-container">
        <Header />
        <div className="app-sections">
          <Timer
            minutes={this.state.minutes}
            seconds={this.state.seconds}
            breakActive={this.state.breakActive}
            timerActive={this.state.timerActive}
            startStopTimer={this.startStopTimer}
            resetTimer={this.resetTimer}
          />
          <Break 
            breakTime={this.state.breakTime}
            breakDecrement={this.breakDecrement}
            breakIncrement={this.breakIncrement}
          />
          <Session 
            sessionTime={this.state.sessionTime}
            sessionDecrement={this.sessionDecrement}
            sessionIncrement={this.sessionIncrement}
          />
        </div>
        <Audio />
      </div>
    );
  }
}

export default PomodoroClock;