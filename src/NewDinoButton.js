import React, { Component } from "react";

export class NewDinoButton extends Component {
  render() {
    return (
      <button className="styledButton" onClick={() => this.props.fetchData()}>
        New Dinosaur
      </button>
    );
  }
}

export default NewDinoButton;
