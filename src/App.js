import React, { Component } from "react";
import "./App.css";
import Kid from "./components/Kid";
import Teacher from "./components/Teacher";
import Judge from "./components/Judge";

class App extends Component {
  constructor() {
    super();
    this.state = {
      volume: 0,
      nextSteps: [],
      applaud: "",
      stars: 0,
      available: false,
      renderJudges: false
    };
    this.furtherSteps = this.furtherSteps.bind(this);
    this.getApplaudStatus = this.getApplaudStatus.bind(this);
    this.recieveStars = this.recieveStars.bind(this);
    this.renderJudgesComp = this.renderJudgesComp.bind(this);
  }

  furtherSteps(nextSteps) {
    this.setState({ nextSteps });
  }

  getApplaudStatus(applaud) {
    this.setState({ applaud });
  }

  recieveStars(stars) {
    this.setState({ stars });
  }

  renderJudgesComp(param) {
    this.setState({ renderJudges: param });
    console.log(param);
  }

  componentWillMount() {
    this.setState({ volume: 5, available: true, renderJudges: true });
  }

  render() {
    const { nextSteps, applaud, stars, available, renderJudges } = this.state;
    return (
      <div className="App">
        <h1 className="App-title">React Life-Cycle Hooks</h1>
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header> */}
        {available ? (
          <div>
            <Kid
              dressColor="yellow"
              furtherSteps={nextSteps}
              sendApplaudStatus={applaud}
              sendStars={stars}
              renderJudgesComp={this.renderJudgesComp}
            />
            <hr />
            <Teacher myCallBack={this.furtherSteps} />
            <br />
            <button
              onClick={() => {
                this.setState({ available: false });
              }}
            >
              Leave Kid
            </button>
          </div>
        ) : (
          <div>Kid is not available</div>
        )}
        <hr />
        {renderJudges ? (
          <Judge
            getApplaudStatus={this.getApplaudStatus}
            recieveStars={this.recieveStars}
            available={available}
          />
        ) : (
          <div>Judges left the Auditorium</div>
        )}
      </div>
    );
  }
}

export default App;
