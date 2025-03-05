import React from "react";

const OutputLED = ({ output }) => {
  return (
    <div>
      <p>Output:</p>
      <div
        style={{
          width: "50px",
          height: "50px",
          borderRadius: "50%",
          backgroundColor: output ? "green" : "red",
        }}
      />
    </div>
  );
};

export default OutputLED;
