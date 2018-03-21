import React, { Component } from 'react';
import './App.css';
import './css/style.css';
import FoodFinder from './FoodFinder.js';

class App extends Component {
  render() {
    return (
      <div className="app-body">
        <header></header>
        <FoodFinder/>
        <footer></footer>
      </div>
    );
  }
}

export default App;
