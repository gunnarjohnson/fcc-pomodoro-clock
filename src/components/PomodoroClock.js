import React from 'react';
import Break from './Break';
import Header from './Header';
import Session from './Session';
import Timer from './Timer';

class PomodoroClock extends React.Component {
	state = {
    minutes: 25,
    seconds: undefined,
    breakInactive: true,
    breakTime: 5,
    sessionTime: 25,
    timerInactive: true
  };

  startTimer = () => {
    if (this.state.timerInactive) {
      this.setState({ timerInactive: false });
      this.interval = setInterval(() => {

        if (this.state.seconds == undefined) {
          if (this.state.minutes == 0  && this.state.breakInactive) {
            this.setState({ 
              minutes: this.state.breakTime,
              breakInactive: false
            });
          } else if (this.state.minutes == 0) {
            this.setState({
              minutes: this.state.sessionTime,
              breakInactive: true
            });
          } else {
            this.setState({ 
              minutes: this.state.minutes - 1,
              seconds: 59,
            });
          }

        } else if (this.state.seconds == 1) {
          this.setState({ seconds: undefined });

        } else {
          this.setState({ seconds: this.state.seconds - 1 });
        }

      }, 1000);
    } else {
      this.setState({ timerInactive: true });
      clearInterval(this.interval);
    }
  };

  resetTimer = () => {
    this.setState({
      minutes: 25,
      seconds: undefined,
      breakInactive: true,
      breakTime: 5,
      sessionTime: 25,
      timerInactive: true
    });
  };

  breakDecrement = () => {
    if (this.state.breakTime > 1) {
      this.setState({ breakTime: this.state.breakTime - 1 });
    }
  };

  breakIncrement = () => {
    if (this.state.breakTime < 60) {
      this.setState({ breakTime: this.state.breakTime + 1 });
    }
  };

  sessionDecrement = () => {
    if (this.state.sessionTime > 1) {
      this.setState({ 
        minutes: this.state.sessionTime - 1,
        seconds: undefined,
        sessionTime: this.state.sessionTime - 1 
      });
    }
  };

  sessionIncrement = () => {
    if (this.state.sessionTime < 60) {
      this.setState({ 
        minutes: this.state.sessionTime + 1,
        seconds: undefined,
        sessionTime: this.state.sessionTime + 1 
      });
    }
  };
  
  render() {
    return (
      <div>
        <Header />
        <Timer
          breakInactive={this.state.breakInactive}
          minutes={this.state.minutes}
          seconds={this.state.seconds}
          startTimer={this.startTimer}
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
    );
  }
}

export default PomodoroClock;