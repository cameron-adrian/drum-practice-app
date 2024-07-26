import React from "react";

function DrumPattern({ pattern, tempo }) {
  const drumSounds = {
    R: "/sounds/snare.mp3",
    L: "/sounds/snare.mp3",
    K: "/sounds/kick.mp3",
    Ř: "/sounds/snare-accent.mp3",
    Ĺ: "/sounds/snare-accent.mp3",
    ŗ: "/sounds/snare-soft.mp3",
    ļ: "/sounds/snare-soft.mp3",
  };

  const playSound = (sound) => {
    const audio = new Audio(drumSounds[sound]);
    audio.play();
  };

  const playPattern = () => {
    const interval = 60000 / tempo;
    pattern.forEach((sound, index) => {
      setTimeout(() => playSound(sound), index * interval);
    });
  };

  const copyPatternToClipboard = () => {
    navigator.clipboard.writeText(pattern.join(" ")).then(() => {
      alert("Pattern copied to clipboard!");
    });
  };

  return (
    <div className="drum-pattern">
      <h2>Your Pattern:</h2>
      <p className="pattern">
        {pattern != 0 ? pattern.join(" ") : "\u00A0\u00A0\n\u00A0\u00A0"}
      </p>
      <div className="button-group">
        <button onClick={playPattern}>Play Pattern</button>
        <div className="copy-pattern-button">
          <button onClick={copyPatternToClipboard}>Copy Pattern</button>
        </div>
      </div>
    </div>
  );
}

export default DrumPattern;
