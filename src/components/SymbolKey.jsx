import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";

function SymbolKey() {
  const symbols = [
    {
      id: 1,
      name: "R",
      description: "Right Hand",
      tooltip: "Use your right hand to hit the drum.",
    },
    {
      id: 2,
      name: "L",
      description: "Left Hand",
      tooltip: "Use your left hand to hit the drum.",
    },
    {
      id: 3,
      name: "K",
      description: "Kick Drum",
      tooltip: "Use the kick drum pedal.",
    },
    {
      id: 4,
      name: "Ř",
      description: "Right Hand Accent",
      tooltip: "Hit hard with your right hand.",
    },
    {
      id: 5,
      name: "Ĺ",
      description: "Left Hand Accent",
      tooltip: "Hit hard with your left hand.",
    },
    {
      id: 6,
      name: "ŗ",
      description: "Right Hand Ghost Note",
      tooltip: "Hit softly with your right hand.",
    },
    {
      id: 7,
      name: "ļ",
      description: "Left Hand Ghost Note",
      tooltip: "Hit softly with your left hand.",
    },
  ];

  return (
    <section className="symbol-key">
      <div>
        {symbols.map((symbol) => (
          <div key={symbol.id}>
            <span className="symbol-name">{symbol.name}: </span>
            <span className="symbol-description">
              {symbol.description}
              <i
                className="fas fa-info-circle"
                title={symbol.tooltip}
                style={{ marginLeft: "8px" }}
              ></i>
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default SymbolKey;
