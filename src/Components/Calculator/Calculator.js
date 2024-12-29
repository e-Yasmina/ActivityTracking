import React from "react";
import "./Calculator.css";

const Calculator = () => {
  const numbers = [
    ["7", "8", "9"],
    ["4", "5", "6"],
    ["1", "2", "3"],
    ["AC", "0", ","],
  ];
  const symbols = ["÷", "-", "+", "="];

  return (
    <div className="container">
    <div className="calculator">
      <div className="header">
        <div className="window">
          <span className="red"></span>
          <span className="yellow"></span>
          <span className="green"></span>
        </div>
        <div className="input">
          1378 - 12 = <span>1336</span>
        </div>
      </div>
      <div className="keys">
        {numbers.map((row, rowIndex) => (
          <div className="row" key={rowIndex}>
            <div className="number">
              {row.map((num, index) => (
                <span key={index} className={num === "AC" ? "dull" : ""}>
                  {num}
                </span>
              ))}
            </div>
            {rowIndex < symbols.length && (
              <div className={`symbol ${rowIndex === symbols.length - 1 ? "action" : ""}`}>
                <span>{symbols[rowIndex]}</span>
              </div>
            )}
          </div>
        ))}
      </div>
      
    </div>
    </div>
  );
};

export default Calculator;
