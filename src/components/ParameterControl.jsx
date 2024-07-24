import React, { useState } from "react";

function ParameterControl(props) {
  const { patternLength, setPatternLength } = props;
  const { tempo, setTempo } = props;

  return (
    <div className="input-group">
      <div>
        <label htmlFor="patternLength">Pattern Length: {patternLength}</label>
        <input
          className="slider"
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
      </div>
      <div>
        <label htmlFor="tempo">Tempo (BPM):</label>
        <input
          className="slider"
          type="number"
          id="tempo"
          value={tempo}
          onChange={(e) =>
            setTempo(
              Math.min(240, Math.max(36, parseInt(e.target.value) || 120))
            )
          }
          min="36"
          max="240"
          step="1"
        />
      </div>
    </div>
  );
}

export default ParameterControl;
