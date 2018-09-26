import React from "react";

export default class Judge extends React.Component {
  constructor(props) {
    super(props)
    this.state = { stars: 0, available: props.available }
    this.applaud = this.applaud.bind(this)
    this.provideStars = this.provideStars.bind(this)
  }

  applaud() {
    this.props.getApplaudStatus(true)
  }

  provideStars() {
    const { stars } = this.state;
    this.setState({
      stars: stars + 1
    })
    this.props.recieveStars(stars + 1)
  }

  shouldComponentUpdate() {
    const { stars } = this.state;

    return stars < 5 ? true : false
  }

  render() {
    const { stars, available } = this.state;
    // console.log(stars, "render");

    return (
      <div>
        <button type="button" onClick={this.applaud}>Appreciate performance</button>
        <button type="button" onClick={this.provideStars}>Provide stars</button>
        <br />
        Kid is available: {available ? "yes" : 'no'}
        <br />
        Stars gained: {stars}
        <br />
      </div>
    );
  }
}
