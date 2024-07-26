import React from "react";

function ParameterControl(props) {
  const { patternLength, setPatternLength } = props;
  const { tempo, setTempo } = props;

  const handleTempoChange = (e) => {
    const value = parseInt(e.target.value, 10);
    if (!isNaN(value) && value >= 36 && value <= 240) {
      setTempo(value);
    } else {
      e.target.value = tempo;
    }
  };

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
        <label htmlFor="tempo">Tempo: {tempo} BPM </label>
        <input
          className="slider"
          pattern="[0-9]*"
          type="range"
          id="tempo"
          value={tempo}
          onChange={handleTempoChange}
          min="36"
          max="240"
          step="1"
        />
      </div>
    </div>
  );
}

export default ParameterControl;
