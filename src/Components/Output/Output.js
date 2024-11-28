import React, { useState } from "react";
import { executeCode } from "../../api";
import "./Output.css";
import PlayIcon from "../Buttons/PlayIcon";

const Output = ({ editorRef, language }) => {
  const [output, setOutput] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const runCode = async () => {
    const sourceCode = editorRef.current.getValue();
    if (!sourceCode) return;
    try {
      setIsLoading(true);
      const { run: result } = await executeCode(language, sourceCode);
      setOutput(result.output.split("\n"));
      result.stderr ? setIsError(true) : setIsError(false);
    } catch (error) {
      console.error("An error occurred:", error.message || "Unable to run code");
      alert(error.message || "An error occurred while running the code.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="output-container">
      {/* <label>
        Output
      </label> */}
      {/* <button className="run-button"
        disabled={isLoading}
        onClick={runCode}
      >
        {isLoading ? "Running..." : "Run Code"}
      </button> */}
      {/* <LiquidButton disabled={isLoading} onClick={runCode}>
        {isLoading ? "..." : ">"}
      </LiquidButton> */}
      <div className="run-button" onClick={runCode}>
      <PlayIcon/>
      </div>

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
