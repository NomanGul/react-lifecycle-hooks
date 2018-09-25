import React from "react";

export default class Judge extends React.Component {
  constructor() {
    super()
    this.state = { stars: 0, available: false }
    this.applaud = this.applaud.bind(this)
    this.provideStars = this.provideStars.bind(this)
  }

  applaud() {
    //Send this applaud status to Kid.js
    this.props.getApplaudStatus(true)
  }

  provideStars() {
    const { stars } = this.state;

  }

  render() {
    const { stars, available } = this.state;

    return (
      <div>
        <button type="button" onClick={this.applaud}>
          Appreciate performance
          </button>
        <button type="button" onClick={this.provideStars}>
          Provide stars
          </button>

        Kid is available: {available}

        Stars gained: {stars}
      </div>
    );
  }
}
