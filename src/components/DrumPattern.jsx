import React from "react";

function DrumPattern({ pattern }) {
  return (
    <div className="drum-pattern">
      <h2>Your Pattern:</h2>
      <p className="pattern">
        {pattern != 0 ? pattern.join(" ") : "\u00A0\u00A0\u00A0"}
      </p>
      {/* TODO: fill this p tag with &nbsp characters to make sure it's a certain size before the pattern comes 
      TODO: pattern character improvements: add bold, colors, etc to help differentiate them visually
      TODO: button to randomize the theme colors
      TODO: checkbox to toggle accents
      TODO: checkbox to toggle ghost notes
      TODO: checkbox to toggle kick drum
      TODO: copy pattern button*/}
    </div>
  );
}

export default DrumPattern;
