import React from "react";
import "./TestOutput.css";

const TestOutput = ({ output }) => {
  return (
    <div className="test-output-container">
      <div className="test-output-box">
        {output && output.length > 0 ? (
          output.map((line, i) => (
            <p
              key={i}
              className={
                line.includes("succeeded")
                  ? "success-line"
                  : line.includes("failed")
                  ? "failure-line"
                  : ""
              }
              style={{ margin: "0 0 4px", padding: "4px" }}
            >
              {line}
            </p>
          ))
        ) : (
          <p>Click "Run testCases" to see the output here</p>
        )}
      </div>
    </div>
  );
};

export default TestOutput;

// import React from "react";
// import "./TestOutput.css";

// const TestOutput = ({ output }) => {

//   return (
//     <div className="test-output-container">
//       <div className="test-output-box">
//         {output
//           ? output.map((line, i) => (
//               <p key={i} style={{ margin: "0 0 4px" }}>
//                 {line}
//               </p>
//             ))
//           : 'Click "Test Code" to see the output here'}
//       </div>
//     </div>
//   );
// };

// export default TestOutput;
