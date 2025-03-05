import React from "react";
import "./JoystickControls.css";

const JoystickControls = ({ inputs, onToggle }) => {
  return (
    <div className="joystick-container">
      <h3>Input Controls:</h3>
      <div className="switch-group">
        {inputs.map((value, index) => (
          <label key={index} className="switch">
            <input
              type="checkbox"
              checked={value}
              onChange={() => onToggle(index)}
            />
            <span className="slider round"></span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default JoystickControls;
