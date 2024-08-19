import React, { useState } from "react"; // Use ES6 import for React
import './index.css'; // CSS import

function Colorpicker() {
  const [color, setColor] = useState("#FFFFFF"); // Default color for container background
  const [pColor, setPColor] = useState("#FFFFFF"); // Default color for <h1> background

  const handleColorChange = (e) => {
    setColor(e.target.value); // Update container background color
  };

  const handlePColorChange = (e) => {
    setPColor(e.target.value); // Update <h1> background color
  };

  return (
    <div
      className="colorPickerContainer"
      style={{ backgroundColor: color }} // Dynamic container background color
    >
      <h1 style={{ backgroundColor: pColor }}>Color Picker</h1> {/* Dynamic <h1> background */}
      
      <div>
        <p>Selected container color: {color}</p>
        <label>Select a Background Color for the Container:</label>
        <input 
          type="color" 
          value={color} 
          onChange={handleColorChange} // Handle container background color changes
        />
      </div>
      
      <div>
        <p>Selected <strong>&lt;h1&gt;</strong> color: {pColor}</p>
        <label>Select a Background Color for &lt;h1&gt;:</label>
        <input 
          type="color" 
          value={pColor} 
          onChange={handlePColorChange} // Handle <h1> background color changes
        />
      </div>
    </div>
  );
}

export default Colorpicker;
