import React from "react";

const InputControls = ({ inputs, onToggle }) => {
  return (
    <div>
      <p>Inputs:</p>
      {inputs.map((value, index) => (
        <button key={index} onClick={() => onToggle(index)}>
          {value ? "1" : "0"}
        </button>
      ))}
    </div>
  );
};

export default InputControls;
