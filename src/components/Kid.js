import React from "react";

export default class Kid extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      emotion: "nervous",
      danceSteps: [],
      currentStepIndex: 0,
      startedPerforming: false
    };
  }

  static getDerivedStateFromProps(props, state) {
    const { furtherSteps, sendApplaudStatus } = props;
    // console.log(state.danceSteps)
    // console.log(props);

    return {
      danceSteps: furtherSteps,
      emotion: sendApplaudStatus ? "Happy" : "nervous"
    };
  }

  componentDidMount() {
    const { danceSteps } = this.state;
    danceSteps.push("step1");
    danceSteps.push("step2");
    this.setState({ danceSteps, startedPerforming: true });
  }

  componentDidUpdate(prevProps) {
    if (prevProps.sendStars === 4) {
      this.qualified();
    }
  }

  qualified() {
    this.setState({ startedPerforming: false });
  }

  componentWillUnmount() {
    this.props.renderJudgesComp(false);
  }

  render() {
    const { dressColor } = this.props;
    const {
      danceSteps,
      emotion,
      startedPerforming,
      currentStepIndex
    } = this.state;
    // console.log(danceSteps, currentStepIndex, danceSteps[currentStepIndex], "***");
    return (
      <div>
        <div>dressColor: {dressColor})</div>
        <div style={{ backgroundColor: dressColor, width: 50, height: 50 }} />
        <div>Performing: {startedPerforming ? "yes" : "no"}</div>
        <div>Emotion: {emotion})</div>
        {startedPerforming && (
          <div>
            Current Step: {danceSteps[currentStepIndex]})
            <button
              onClick={() =>
                this.setState({ currentStepIndex: currentStepIndex + 1 })
              }
            >
              Perform Next Step
            </button>
          </div>
        )}
      </div>
    );
  }
}
Kid.defaultProps = { dressColor: "red", applaud: false, furtherSteps: [] };
