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




// import React, { useState } from "react";
// import { executeCode } from "../../api"; // API call to execute code (if needed)
// import "./Output.css";
// import PlayIcon from "../Buttons/PlayIcon";
// import "./test";

// const Output = ({ editorRef, language, evaluateCode }) => {
//   const [output, setOutput] = useState(null);
//   const [isLoading, setIsLoading] = useState(false);
//   const [isError, setIsError] = useState(false);
  
//   const validate = async () => {
//     const sourceCode = editorRef.current.getValue();
//   const tests = [
//     { func: "add", args: [2, 3], expected: 5 },
//     { func: "subtract", args: [5, 3], expected: 2 },
//     { func: "multiply", args: [4, 3], expected: 12 },
//     { func: "divide", args: [10, 2], expected: 5 },
//   ];

//     try {
//       const response = await executeCode(language, sourceCode);
//       const { stdout, stderr } = response;
  
//       if (stderr) {
//         setOutput(["❌ Error executing code:", stderr]);
//       } else {
//         const output = stdout.split("\n");
  
//         const failedTests = output.filter((line) => line.includes("Test failed"));
//         if (failedTests.length > 0) {
//           setOutput(failedTests);
//         } else {
//           setOutput(["🎉 All tests passed!"]);
//         }
//       }
//     } catch (error) {
//       console.error("An error occurred:", error.message || "Validation failed.");
//       setOutput(["❌ Error running the code."]);
//     }
//   };
//   const runCode = async () => {
//         const sourceCode = editorRef.current.getValue();
//         if (!sourceCode) return;
//         try {
//           setIsLoading(true);
//           const { run: result } = await executeCode(language, sourceCode);
//           setOutput(result.output.split("\n"));
//           result.stderr ? setIsError(true) : setIsError(false);
//           validate();
//         } catch (error) {
//           console.error("An error occurred:", error.message || "Unable to run code");
//           alert(error.message || "An error occurred while running the code.");
//         } finally {
//           setIsLoading(false);
//         }
//       };
    

//   return (
//     <div className="output-container">
//       {/* Run Code button */}
//       <div className="run-button" onClick={runCode}>
//         <PlayIcon />
//       </div>

//       {/* Output display */}
//       <div className="output-box">
//         {output
//           ? output.map((line, i) => (
//               <p key={i} style={{ margin: "0 0 4px", color: isError ? "red" : "green" }}>
//                 {line}
//               </p>
//             ))
//           : 'Click "Run Code" to see the output here'}
//       </div>
//     </div>
//   );
// };

// export default Output;
