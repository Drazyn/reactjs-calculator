import React from 'react';

import { FiSun } from "react-icons/fi";

import './styles.css';

function App() {
  return (
    <div className="App-item">
      <div id="calculator">
        
        <div id="top-items">
        <div id="changeColorMode"><FiSun /></div>
          <div id="text-result">0</div>
        </div>
        <div id="display-box"> <div id="valueEditing">0</div> </div>
        <div id="buttons-box">
          <button className="blueButton">C</button>
          <button className="blueButton">(</button>
          <button className="blueButton">)</button>
          <button className="blueButton">/</button>
          <button className="grayButton">7</button>
          <button className="grayButton">8</button>
          <button className="grayButton">9</button>
          <button className="blueButton">X</button>
          <button className="grayButton">4</button>
          <button className="grayButton">5</button>
          <button className="grayButton">6</button>
          <button className="blueButton">-</button>
          <button className="grayButton">1</button>
          <button className="grayButton">2</button>
          <button className="grayButton">3</button>
          <button className="blueButton">+</button>
          <button className="grayButton">0</button>
          <button className="grayButton">.</button>
          <button className="redButton">=</button>
        </div>
      </div>
    
    </div>
  );
}

export default App;
