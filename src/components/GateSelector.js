import React from "react";

const GateSelector = ({ selectedGate, onSelectGate }) => {
  return (
    <div>
      <label>Select Logic Gate: </label>
      <select
        value={selectedGate}
        onChange={(e) => onSelectGate(e.target.value)}
      >
        <option value="AND">AND</option>
        <option value="OR">OR</option>
        <option value="XOR">XOR</option>
        <option value="NAND">NAND</option>
        <option value="NOR">NOR</option>
        <option value="XNOR">XNOR</option>
      </select>
    </div>
  );
};

export default GateSelector;
