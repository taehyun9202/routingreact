import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Router } from '@reach/router';
import HomeComponent from './components/HomeComponent';
import NumberComponent from './components/NumberComponent';
import CompComponent from './components/CompComponent';

function App() {
  console.log("id")
  return (
    <div className="App">
      <Router>
            <HomeComponent path="/home"/>
            <NumberComponent path="/:id"/>
            <CompComponent path="/:id/:fcolor/:bcolor"/>
      </Router>
    </div>
  );
}

export default App;



