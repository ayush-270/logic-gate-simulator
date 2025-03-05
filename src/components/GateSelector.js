import React from "react";
import "./GateSelector.css";

const gates = ["AND", "OR", "XOR", "NAND", "NOR", "XNOR", "NOT"];

const GateSelector = ({ selectedGate, onSelectGate }) => {
  return (
    <div className="gate-selector">
      <h3>Select Logic Gate:</h3>
      <select
        value={selectedGate}
        onChange={(e) => onSelectGate(e.target.value)}
      >
        {gates.map((gate) => (
          <option key={gate} value={gate}>
            {gate}
          </option>
        ))}
      </select>
    </div>
  );
};

export default GateSelector;
