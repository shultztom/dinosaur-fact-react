import React, { Component } from "react";
import logo from "./blue-dinosaur.svg";
import "./App.css";
import axios from "axios";

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: null,
      description: null
    };
  }

  fetchData = () => {
    axios
      .get("https://dinosaur-facts-api.herokuapp.com/dinosaurs/random")
      .then(response => {
        if (response.status === 200 && response.statusText === "OK") {
          this.setState({
            name: response.data.Name,
            description: response.data.Description
          });
        } else {
          console.log("Error getting dinosaur :(");
          this.setState({
            name: "Error getting dinosaur :(",
            description: null
          });
        }
      })
      .catch(error => {
        console.log("Error getting dinosaur :(");
        this.setState({ name: "Error getting dinosaur :(", description: null });
      });
  };

  componentDidMount() {
    this.fetchData();
  }

  NewDinoButton() {
    return (
      <button className="styledButton" onClick={() => this.fetchData()}>
        New Dinosaur
      </button>
    );
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Dinosaur Facts!</h1>
        </header>
        <div className="dinosaurInfo">
          <div className="dinosaurName">
            <p>{this.state.name}</p>
          </div>
          <div className="dinosaurDescription">
            <p>{this.state.description}</p>
          </div>
          {this.NewDinoButton()}
        </div>
      </div>
    );
  }
}

export default App;
