import React from "react";
import "./OutputLED.css";

const OutputLED = ({ output }) => {
  return (
    <div className="output-container">
      <h3>Output:</h3>
      <div className={`led ${output ? "on" : "off"}`}></div>
    </div>
  );
};

export default OutputLED;
