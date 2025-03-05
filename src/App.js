import React, { useState } from "react";
import GateSelector from "./components/GateSelector";
import TruthTable from "./components/TruthTable";
import JoystickControls from "./components/JoystickControls";
import OutputLED from "./components/OutputLED";
import logicGates from "./logicGates";
import "./App.css";


function App() {
  const [selectedGate, setSelectedGate] = useState("AND");
  const [inputs, setInputs] = useState([0, 0]);

  const toggleInput = (index) => {
    setInputs((prevInputs) => {
      const newInputs = [...prevInputs];
      newInputs[index] = newInputs[index] ? 0 : 1;
      return newInputs;
    });
  };

  const output = logicGates[selectedGate](inputs[0], inputs[1]);

  return (
    <div className="app-container">
      <h1>Logic Gate Simulator</h1>
      <div className="main-content">
        <div className="left-panel">
          <GateSelector
            selectedGate={selectedGate}
            onSelectGate={setSelectedGate}
          />
          <TruthTable selectedGate={selectedGate} />
        </div>
        <div className="right-panel">
          <JoystickControls inputs={inputs} onToggle={toggleInput} />
          <OutputLED output={output} />
        </div>
      </div>
    </div>
  );
}

export default App;
