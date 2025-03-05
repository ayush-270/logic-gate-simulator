import React from "react";

const TruthTable = ({ selectedGate }) => {
  return (
    <div>
      <h3>Truth Table</h3>
      <img
        src={`/assets/${selectedGate}.png`}
        alt={`${selectedGate} Truth Table`}
        style={{ width: "200px", height: "auto", marginTop: "10px" }}
      />
    </div>
  );
};

export default TruthTable;
