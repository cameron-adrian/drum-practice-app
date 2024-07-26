import "./App.css";
import React, { useState } from "react";
import DrumPattern from "./components/DrumPattern";
import SignUpForm from "./components/SignUpForm";
import SymbolKey from "./components/SymbolKey";
import ParameterControl from "./components/ParameterControl";

function App() {
  const [pattern, setPattern] = useState([]);
  const [patternLength, setPatternLength] = useState(8);
  const [tempo, setTempo] = useState(120);

  const generatePattern = () => {
    const newPattern = [];
    const options = ["R", "L", "K", "Ř", "Ĺ", "ŗ", "ļ"];
    let rCount = 0;
    let lCount = 0;

    for (let i = 0; i < patternLength; i++) {
      let hit;
      do {
        hit = options[Math.floor(Math.random() * options.length)];
      } while (
        ((hit === "R" || hit === "Ř" || hit === "ŗ") && rCount >= 4) ||
        ((hit === "L" || hit === "Ĺ" || hit === "ļ") && lCount >= 4)
      );

      if (hit === "R" || hit === "Ř" || hit === "ŗ") {
        rCount++;
        lCount = 0;
      } else if (hit === "L" || hit === "Ĺ" || hit === "ļ") {
        lCount++;
        rCount = 0;
      } else {
        rCount = 0;
        lCount = 0;
      }

      newPattern.push(hit);
    }
    setPattern(newPattern);
  };

  function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }

  function updateThemeColors() {
    const root = document.documentElement;
    root.style.setProperty("--dark-color", getRandomHexColor());
    root.style.setProperty("--medium-color", getRandomHexColor());
    root.style.setProperty("--accent-color", getRandomHexColor());
    root.style.setProperty("--light-color", getRandomHexColor());
  }

  return (
    <div>
      <div className="container">
        <h1>Drum Pattern Randomizer</h1>
        <div className="change-theme-button">
          <button onClick={updateThemeColors}>Change Theme</button>
        </div>
        <ParameterControl
          className="left-sidebar"
          patternLength={patternLength}
          setPatternLength={setPatternLength}
          tempo={tempo}
          setTempo={setTempo}
        />
        <div className="generate-pattern-button">
          <button onClick={generatePattern}>Generate New Pattern</button>
        </div>
        <div className="pattern-group">
          <DrumPattern pattern={pattern} tempo={tempo} />
          <SymbolKey />
        </div>
        <SignUpForm />
      </div>
    </div>
  );
}

export default App;
