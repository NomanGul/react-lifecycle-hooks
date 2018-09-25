import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Kid from "./Screens/Kid/Kid";
import Teacher from "./Screens/Teacher/Teacher";

class App extends Component {
  constructor() {
    super();
    this.state = {
      volume: 0,
      nextSteps: [],
      index: null
    }
    this.furtherSteps = this.furtherSteps.bind(this)
  }

  furtherSteps(nextSteps, index) {
    this.setState({ nextSteps, index })
  }

  componentWillMount() {
    this.setState({ volume: 5 })
  }


  render() {
    const { nextSteps, index } = this.state
    return (
      <div className="App">
        <h1 className="App-title">React Life-Cycle Hooks</h1>
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header> */}
        <Kid dressColor="blue" furtherSteps={nextSteps} index={index} />
        <hr />
        <Teacher myCallBack={this.furtherSteps} />
      </div>
    );
  }
}

export default App;
