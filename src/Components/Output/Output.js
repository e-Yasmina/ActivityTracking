import React, { useState } from "react";
import "./Output.css";

const Output = ({ output }) => {
  // const [output, setOutput] = useState(null);
  

  

  return (
    <div className="output-container">
      {/* <button className="run-button"
        disabled={isLoading}
        onClick={runCode}
      >
        {isLoading ? "Running..." : "Run Code"}
      </button> */}
    
      

      <div className="output-box">
        {output
          ? output.map((line, i) => (
              <p key={i} style={{ margin: "0 0 4px" }}>
                {line}
              </p>
            ))
          : 'Click "Run Code" to see the output here'}
      </div>
    </div>
  );
};

export default Output;


