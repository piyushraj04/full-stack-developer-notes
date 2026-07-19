import React, { Component } from "react";

export default class TheLightSwitch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: true,
    };
  }
  toggle = () => {
    this.setState({
      status: !this.state.status,
    });
  };

  render() {
    return (
      <div>
        <h1>{this.state.status ? "The light is ON" : "The light is OFF"}</h1>
        <button onClick={this.toggle}>Toggle</button>
      </div>
    );
  }
}
