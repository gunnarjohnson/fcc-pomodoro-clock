import React from 'react';
import Break from './Break';
import Header from './Header';
import Session from './Session';
import Timer from './Timer';

class PomodoroClock extends React.Component {
  constructor(props) {
    super(props);
    this.startTimer = this.startTimer.bind(this);
    this.resetTimer = this.resetTimer.bind(this);
    this.breakDecrement = this.breakDecrement.bind(this);
    this.breakIncrement = this.breakIncrement.bind(this);
    this.sessionDecrement = this.sessionDecrement.bind(this);
    this.sessionIncrement = this.sessionIncrement.bind(this);
		this.state = {
      minutes: 25,
      seconds: undefined,
      breakTime: 5,
      sessionTime: 25,
      timerInactive: true
		};
	}

  resetSeconds() {
    if (this.state.seconds !== undefined) {
      this.setState({
        seconds: undefined
      });
    }
  }

  startTimer() {
    if (this.state.timerInactive) {
      this.setState({ timerInactive: false });

      let timeLeft = setInterval(() => {
        if (this.state.seconds == undefined) {
          this.setState({ 
            minutes: this.state.minutes - 1,
            seconds: 59 
          });
        }
        else if (this.state.seconds == 1) {
          this.setState({ 
            seconds: undefined
          });
        }
        else {
          this.setState({ 
            seconds: this.state.seconds - 1
          });
        }
      }, 1000);
    } else {
      this.setState({
        timerInactive: true
      });
      // stopTimer();
    }
    console.log('Start/Stop Timer');
  };

  resetTimer() {
    this.setState({
      minutes: 25,
      seconds: undefined,
      breakTime: 5,
      sessionTime: 25
    });
    console.log('Reset Timer');
  };
  breakDecrement() {
    if (this.state.breakTime > 1) {
      this.setState({ breakTime: this.state.breakTime - 1 });
    } else {
      console.log('Limit reached');
    }
  };
  breakIncrement() {
    if (this.state.breakTime < 60) {
      this.setState({ breakTime: this.state.breakTime + 1 });
    } else {
      console.log('Limit reached');
    }
  };
  sessionDecrement() {
    if (this.state.sessionTime > 1) {
      this.setState({ 
        minutes: this.state.sessionTime - 1,
        sessionTime: this.state.sessionTime - 1 
      });
    } else {
      console.log('Limit reached');
    }
  };
  sessionIncrement() {
    if (this.state.sessionTime < 60) {
      this.setState({ sessionTime: this.state.sessionTime + 1 });
    } else {
      console.log('Limit reached');
    }
  };
  
  render() {
    return (
      <div>
        <Header />
        <Timer
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