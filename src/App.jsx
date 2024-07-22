import "./App.css";
import React, { useState } from "react";
import DrumPattern from "./components/DrumPattern";
import SignUpForm from "./components/SignUpForm";
import SymbolKey from "./components/SymbolKey";

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
    <div className="container">
      <h1>Drum Pattern Randomizer</h1>
      <div className="input-group">
        <label htmlFor="patternLength">Pattern Length:</label>
        <input
          type="range"
          id="patternLength"
          value={patternLength}
          onChange={(e) =>
            setPatternLength(
              Math.min(16, Math.max(1, parseInt(e.target.value) || 1))
            )
          }
          min="1"
          max="16"
        />
        <button onClick={generatePattern}>Generate Pattern</button>
      </div>
      <DrumPattern pattern={pattern} />
      <SymbolKey />
      <SignUpForm />
    </div>
  );
}

export default App;
