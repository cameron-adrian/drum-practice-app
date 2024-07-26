import React from "react";

function ParameterControl(props) {
  const { patternLength, setPatternLength } = props;
  const { tempo, setTempo } = props;

  // function validateTempoValue(value) {
  //   if (value) {
  // TODO: fix input so that you can only input numbers in the acceptable range
  //   }
  //   return;
  // }

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
          pattern="[0-9]*"
          type="number"
          id="tempo"
          value={tempo}
          onChange={(e) => {
            setTempo(e.target.value);
          }}
          min="36"
          max="240"
          step="1"
        />
      </div>
    </div>
  );
}

export default ParameterControl;
