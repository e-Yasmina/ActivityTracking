import {React, useState} from "react";
import "./Calculator.css";

const Calculator = ({isEnabled}) => {
  const [input, setInput] = useState("1378 - 12 = "); // Default input
  const [output, setOutput] = useState("1336"); // Default output
  const [expression, setExpression] = useState("1378 - 12 = ");
  const numbers = [
    ["7", "8", "9"],
    ["4", "5", "6"],
    ["1", "2", "3"],
    ["AC", "0", ","],
  ];
  const symbols = ["÷", "-", "+", "×", "="];  
  const handleButtonClick = (value) => {
    if (!isEnabled) return; // Don't allow any interaction if disabled
    
    if (value === "AC") {
      setExpression("");
      setOutput("");
    } else if (value === "=") {
      try {
        // Convert to proper syntax for evaluation
        const result = eval(expression.replace("÷", "/").replace("×", "*"));
        setOutput(result);
        setExpression(`${expression} ${value} ${result}`);
      } catch (error) {
        setOutput("Error");
        setExpression("");
      }
    } else {
      setExpression((prev) => prev + value);
    }
  };


  return (
    <div className="calculatorContainer">
      <div className="calculator">
        <div className="header">
          <div className="window">
            <span className="red"></span>
            <span className="yellow"></span>
            <span className="green"></span>
          </div>
          <div className="input">
          {expression} <span>{output}</span>
          </div>
        </div>

        <div className="keys">
          {/* Render Number Rows */}
          {numbers.map((row, rowIndex) => (
            <div className="row" key={rowIndex}>
              <div className="number">
                {row.map((num, index) => (
                  <span
                  onClick={()=>handleButtonClick(num)} 
                  key={index} className={num === "AC" ? "dull" : ""}>
                    {num}
                  </span>
                ))}
              </div>
            </div>
          ))}

          {/* Render Symbol Rows */}
          {symbols.map((symbol, index) => (
            <div 
              key={index} 
              className={`symbol ${symbol === "=" ? "action" : ""}`}
              onClick={()=>handleButtonClick(symbol)}
            >
              <span>{symbol}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Calculator;


