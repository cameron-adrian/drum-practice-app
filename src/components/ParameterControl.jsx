import React, { useState } from "react";

function ParameterControl(props) {
  const { patternLength, setPatternLength } = props;
  return (
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
    </div>
  );
}

export default ParameterControl;
