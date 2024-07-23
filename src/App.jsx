import "./App.css";
import React, { useState } from "react";
import DrumPattern from "./components/DrumPattern";
import SignUpForm from "./components/SignUpForm";
import SymbolKey from "./components/SymbolKey";
import ParameterControl from "./components/ParameterControl";

function App() {
  const [pattern, setPattern] = useState([]);
  const [patternLength, setPatternLength] = useState(8);

  const generatePattern = () => {
    const newPattern = [];
    const options = ["R", "L", "K", "Ř", "Ĺ", "ŗ", "ļ"];
    let rCount = 0;
    let lCount = 0;

    for (let i = 0; i < patternLength; i++) {
      let strike;
      do {
        strike = options[Math.floor(Math.random() * options.length)];
      } while (
        ((strike === "R" || strike === "Ř" || strike === "ŗ") && rCount >= 4) ||
        ((strike === "L" || strike === "Ĺ" || strike === "ļ") && lCount >= 4)
      );

      if (strike === "R" || strike === "Ř" || strike === "ŗ") {
        rCount++;
        lCount = 0;
      } else if (strike === "L" || strike === "Ĺ" || strike === "ļ") {
        lCount++;
        rCount = 0;
      } else {
        rCount = 0;
        lCount = 0;
      }

      newPattern.push(strike);
    }
    setPattern(newPattern);
  };

  return (
    <div>
      <div className="container">
        <h1>Drum Pattern Randomizer</h1>
        <ParameterControl
          className="left-sidebar"
          patternLength={patternLength}
          setPatternLength={setPatternLength}
        />
        <div className="generate-pattern-button">
          <button onClick={generatePattern}>Generate New Pattern</button>
        </div>
        <div className="pattern-group">
          <DrumPattern pattern={pattern} />
          <SymbolKey />
        </div>
        <SignUpForm />
      </div>
    </div>
  );
}

export default App;
