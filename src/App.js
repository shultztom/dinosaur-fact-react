import React, { Component } from "react";
import logo from "./blue-dinosaur.svg";
import "./App.css";
import "./NewDinoButton";
import NewDinoButton from "./NewDinoButton";
require("es6-promise").polyfill();
var axios = require("axios");

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: null,
      description: null
    };
  }

  fetchData = () => {
    this.setState({
      name: "Loading...",
      description: ""
    });
    const config = {
      headers: { Pragma: "no-cache" },
      params: { id: this.state.name }
    };
    axios
      .get("https://dinosaur-facts-api.shultzlab.com/dinosaurs/random", config)
      .then(response => {
        if (response.status === 200) {
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
          <NewDinoButton fetchData={this.fetchData} />
        </div>
      </div>
    );
  }
}

export default App;
