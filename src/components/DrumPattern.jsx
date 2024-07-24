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
  // TODO: Add highlighting to each letter as it plays
  // I would actually have to update the pattern array each time right? Like to update the state of the whole array at the position of the current letter being played
  // I'd need to import the setPattern function from App.jsx and pass it down as a prop
  // I'd could maybe use a useEffect to update the pattern array each time a sound is played
  // but the pattern array would have to be broken up into individual elements and probably displayed as a list of spans or something
  const playSound = (sound) => {
    const audio = new Audio(drumSounds[sound]);
    audio.play();
  };

  // TODO: optimize playback so it's even and doesn't speed up or slow down
  const playPattern = () => {
    const interval = 60000 / tempo;
    pattern.forEach((sound, index) => {
      setTimeout(() => playSound(sound), index * interval);
    });
  };

  return (
    <div className="drum-pattern">
      <h2>Your Pattern:</h2>
      <p className="pattern">
        {pattern != 0 ? pattern.join(" ") : "\u00A0\u00A0\n\u00A0\u00A0"}
      </p>
      <button onClick={playPattern}>Play Pattern</button>
      {/*  
      TODO: Pattern character improvements: add bold, colors, etc to help differentiate them visually. Each one needs a css class
      TODO: button to randomize the theme colors
      TODO: checkbox to toggle accents
      TODO: checkbox to toggle ghost notes
      TODO: checkbox to toggle kick drum
      TODO: copy pattern button*/}
    </div>
  );
}

export default DrumPattern;
