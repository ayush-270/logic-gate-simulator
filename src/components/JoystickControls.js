import React from "react";
import "./JoystickControls.css";
import switchSound from "../components/sound/switch.mp3"; // Add sound file

const JoystickControls = ({ inputs, onToggle }) => {
  const playSound = () => {
    const audio = new Audio(switchSound);
    audio.play();
  };

  return (
    <div className="joystick-container">
      <h3>Input Controls:</h3>
      <div className="switch-group">
        {inputs.map((value, index) => (
          <label key={index} className="switch">
            <input
              type="checkbox"
              checked={value}
              onChange={() => {
                onToggle(index);
                playSound();
              }}
            />
            <span className="slider round"></span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default JoystickControls;
