import React from "react";
import "./TestOutput.css";

const TestOutput = ({ output }) => {
  return (
    <div className="test-output-container">
      <div className="test-output-box">
        {output && output.length > 0 ? (
          output.split("\n").map((line, i) => (
            <p
              key={i}
              className={
                line.includes("succeeded")
                  ? "success-line"
                  : line.includes("failed")
                  ? "failure-line"
                  : line.includes("Error")
                  ? "error-output "
                  : ""
              }
              style={{ margin: "0 0 4px", padding: "4px" }}
            >
              {line}
            </p>
          ))
        ) : (
          <p>Click "Run testCases" to run the tests</p>
        )}
      </div>
    </div>
  );
};

export default TestOutput;

