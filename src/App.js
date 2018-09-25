import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Kid from "./Screens/Kid/Kid";
import Teacher from "./Screens/Teacher/Teacher";
import Judge from "./Screens/Judges/Judges";

class App extends Component {
  constructor() {
    super();
    this.state = {
      volume: 0,
      nextSteps: [],
      applaud: ''
    }
    this.furtherSteps = this.furtherSteps.bind(this)
    this.getApplaudStatus = this.getApplaudStatus.bind(this)
  }

  furtherSteps(nextSteps) {
    this.setState({ nextSteps })
  }

  getApplaudStatus(applaud) {
    this.setState({ applaud })
  }

  componentWillMount() {
    this.setState({ volume: 5 })
  }


  render() {
    const { nextSteps, applaud } = this.state
    return (
      <div className="App">
        <h1 className="App-title">React Life-Cycle Hooks</h1>
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header> */}
        <Kid dressColor="blue" furtherSteps={nextSteps} sendApplaudStatus={applaud} />
        <hr />
        <Teacher myCallBack={this.furtherSteps} />
        <hr />
        <Judge getApplaudStatus={this.getApplaudStatus} />
      </div>
    );
  }
}

export default App;
