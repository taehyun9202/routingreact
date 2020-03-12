import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Router } from '@reach/router';
import HomeComponent from './components/HomeComponent';
import NumberComponent from './components/NumberComponent';
import WordComponent from './components/WordComponent';
import CompComponent from './components/CompComponent';

function App() {
  console.log("id")
  return (
    <div className="App">
      <Router>
            <HomeComponent path="/home"/>
            {isNaN("id") == false ? <NumberComponent path="/:id"/> : <WordComponent path="/:id"/>}
            <CompComponent path="/:id/:fcolor/:bcolor"/>
      </Router>
    </div>
  );
}

export default App;



