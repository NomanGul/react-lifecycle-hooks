import React, { Component } from "react";
import "./App.css";
import Kid from "./components/Kid";
import Teacher from "./components/Teacher";
import Judge from "./components/Judge";

class App extends Component {
  constructor() {
    super();
    this.furtherSteps = this.furtherSteps.bind(this);
    this.applaudValue = this.applaudValue.bind(this);
    this.recieveStars = this.recieveStars.bind(this);
    this.renderJudge = this.renderJudge.bind(this);
    this.state = {
      volume: 0,
      available: false,
      stars: 0,
      applaud: "",
      nextSteps: [],
      renderJudges: false
    };
  }

  furtherSteps(nextSteps) {
    this.setState({ nextSteps });
  }

  applaudValue(applaud) {
    this.setState({ applaud });
  }

  recieveStars(stars) {
    this.setState({ stars });
  }

  renderJudge(param) {
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
        <h1 className="App-title">React LifeCycle Methods</h1>
        {available ? (
          <div>
            <Kid
              dressColor="yellow"
              furtherSteps={nextSteps}
              sendApplaudStatus={applaud}
              sendStars={stars}
              renderJudge={this.renderJudge}
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
            <div>Kid not available</div>
          )}
        <hr />
        {renderJudges ? (
          <Judge
            applaudValue={this.applaudValue}
            recieveStars={this.recieveStars}
            available={available}
          />
        ) : (
            <div>Judges left</div>
          )}
      </div>
    );
  }
}

export default App;
