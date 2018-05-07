import React, { Component } from 'react';
import BurgerRepresentation from './components/burger_representation';
import logo from './logo.svg';
import './App.css';
import IngredientsList from "./components/ingredients_list";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <BurgerRepresentation/>
          <IngredientsList/>
      </div>
    );
  }
}

export default App;
