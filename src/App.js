import logo from './logo.svg';
import './App.css';
import React, { Component } from "react";
import Stove from "./components/stove";
import Oven from "./components/oven";

class App extends Component {

  /**
   * lighter color
   */
  state = {
    lighter: [
      { id: 1, value: '#008000' },
      { id: 2, value: '#CD853F' },
      { id: 3, value: '#9370DB' },
      { id: 4, value: '#FF4500' },
      { id: 5, value: '#FFFF00' },
    ],
  };

  handleRestart = () => {
    window.location.reload();
  };

  /**
   * build a stove
   */
  render() {
    return (
      <div className="main__wrap">
        <main className="container">
          <div className="card__box">
            <Stove
              lighters = {this.state.lighter}
            />
          </div>
        </main>
      </div>
    );
  }
}

export default App;
