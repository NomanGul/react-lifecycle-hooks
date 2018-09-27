import React from "react";

export default class Teacher extends React.Component {
  constructor(props) {
    super(props);
    this.sendDataToKid = this.sendDataToKid.bind(this);
  }
  sendDataToKid() {
    const furtherSteps = ["step3", "step4", "step5"];
    //Send this data to Kid.js
    this.props.myCallBack(furtherSteps);
  }

  render() {
    return <button onClick={this.sendDataToKid}>Get Help From Teacher</button>;
  }
}
