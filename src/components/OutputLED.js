import React, { useEffect } from "react";
import "./OutputLED.css";
import beepSound from "../components/sound/beep.mp3"; // Add sound file

const OutputLED = ({ output }) => {
  useEffect(() => {
    if (output) {
      const audio = new Audio(beepSound);
      audio.play();
    }
  }, [output]);

  return (
    <div className="output-container">
      <h3>Output:</h3>
      <div className={`led ${output ? "on" : "off"}`}></div>
    </div>
  );
};

export default OutputLED;
