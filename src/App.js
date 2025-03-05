import React, { useState } from "react";
import GateSelector from "./components/GateSelector";
import InputControls from "./components/InputControls";
import OutputLED from "./components/OutputLED";
import TruthTable from "./components/TruthTable";
import logicGates from "./logicGates";

function App() {
  const [selectedGate, setSelectedGate] = useState("AND");
  const [inputs, setInputs] = useState([0, 0]);

  const toggleInput = (index) => {
    const newInputs = [...inputs];
    newInputs[index] = newInputs[index] ? 0 : 1;
    setInputs(newInputs);
  };

  const output = logicGates[selectedGate](inputs[0], inputs[1]);

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>Logic Gate Simulator</h1>
      <GateSelector
        selectedGate={selectedGate}
        onSelectGate={setSelectedGate}
      />
      <TruthTable selectedGate={selectedGate} />
      <InputControls inputs={inputs} onToggle={toggleInput} />
      <OutputLED output={output} />
    </div>
  );
}

export default App;
